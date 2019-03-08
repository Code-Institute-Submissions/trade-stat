//Receive data + crossfilter
queue()
    .defer(d3.csv, "data/trades.csv")
    .await(makeGraphs);
    
function makeGraphs(error, tradeData) {
    var ndx = crossfilter(tradeData);
    var all = ndx.groupAll();
    
    //parse dates
    var dayMonthYear = d3.time.format("%m-%d-%Y");
    var monthtest = d3.time.format("%B");
    
    //string to number and date conversion
    tradeData.forEach(function(d){
        d.date = new Date (d["Date(UTC)"]);
        d.dd = new Date (dayMonthYear(d.date));
        d.months = monthtest (new Date(d.dd));
        d.year = new Date (d.dd).getFullYear();
        d.Price = parseFloat(d.Price);
        d.Amount = parseFloat(d.Amount);
        d.Total = parseFloat(d.Total);
        d.Fee = parseFloat(d.Fee);
        d.marketSecond = d.Market.slice(3);
        d.marketFirst = d.Market.slice(0, 3);
        console.log(d.months);
    });
    
    //render all graphs
    show_marketMenu(ndx);
    show_yearMenu(ndx);
    show_monthMenu(ndx);
    show_trading_pairs(ndx);
    show_buysell_orders(ndx);
    show_trading_volume(ndx);
    show_gainloss_timeline(ndx);
    show_profit(ndx);
    
    dc.renderAll();
}

// give possitive and negative meaning to values 
function mult(type) {
        switch(type) {
        case 'SELL': return 1;
        case 'BUY': return -1;
        default: throw new Error('unknown Type ' + type);
        }
    }

function buy(type) {
        switch(type) {
        case 'SELL': return 0;
        case 'BUY': return 1;
        default: throw new Error('unknown Type ' + type);
        }
    } 

function sell(type) {
        switch(type) {
        case 'SELL': return 1;
        case 'BUY': return 0;
        default: throw new Error('unknown Type ' + type);
        }
    } 

//select Market menu
function show_marketMenu(ndx){
    var selectorDim = ndx.dimension(dc.pluck("marketSecond"));
    var selectorGroup = selectorDim.group();
    
    dc.selectMenu("#selectMenu")
        .dimension(selectorDim)
        .group(selectorGroup);
}
//select year menu
function show_yearMenu(ndx){
    var yearDim = ndx.dimension(dc.pluck("year"));
    var yearGroup = yearDim.group();
    
    dc.selectMenu("#yearMenu")
        .dimension(yearDim)
        .group(yearGroup);
} 
//select month menu
function show_monthMenu(ndx){
    var monthDim = ndx.dimension(dc.pluck("months"));
    var monthGroup = monthDim.group();
    
    dc.selectMenu("#monthMenu")
        .dimension(monthDim)
        .group(monthGroup);
}

//Pie chart with amount of trades on pairs
function show_trading_pairs(ndx) {
    var marketDim = ndx.dimension(dc.pluck("marketFirst"));
    var tradingVolume = marketDim.group().reduce(
        function (p, v) {
            p.count++;
            p.total += v.Total;
            return p;
        },
        function (p, v) {
            p.count--;
            p.total -= v.Total;
            return p;
        },
        function () {
            return { count:0, total: 0};
        }
    );
    
    
    dc.pieChart("#trading-pair")
        .width(300)
        .height(200)
        .dimension(marketDim)
        .group(tradingVolume)
        .valueAccessor(function (d) {
            if (d.value.count == 0) {
                return 0;
            } else {
                return d.value.total;
            }
        })
        .radius(300)
        .innerRadius(30)
        .transitionDuration(500)
        .slicesCap(10)
        .legend(dc.legend());
}

//Bar chart with buy and sell type orders
function show_buysell_orders(ndx) {
    var typeDim = ndx.dimension(dc.pluck("Type"));
    var buySellOrders = typeDim.group().reduce(
            function (p, v) {
            p.count++;
            p.total += v.Total;
            return p;
        },
        function (p, v) {
            p.count--;
            p.total -= v.Total;
            return p;
        },
        function () {
            return { count:0, total: 0};
        }
    );
    
    dc.barChart("#buy-sell-orders")
        .width(200)
        .height(200)
        .dimension(typeDim)
        .group(buySellOrders)
        .valueAccessor(function (d) {
            if (d.value.count == 0) {
                return 0;
            } else {
                return d.value.total;
            }
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Type")
        .yAxisLabel("Amount")
        .yAxis().ticks(10);
}

//Bar chart with trading volume per pair
function show_trading_volume(ndx) {
    var marketDim = ndx.dimension(dc.pluck("marketFirst"));
    var buyVolume = marketDim.group().reduce(
        function (p, v) {
            p.count++;
            p.total += buy(v.Type) * v.Total;
            return p;
        },
        function (p, v) {
            p.count--;
            p.total -= buy(v.Type) * v.Total;
            return p;
        },
        function () {
            return { count:0, total: 0};
        }
    );
    var sellVolume = marketDim.group().reduce(
        function (p, v) {
            p.count++;
            p.total += sell(v.Type) * v.Total;
            return p;
        },
        function (p, v) {
            p.count--;
            p.total -= sell(v.Type) * v.Total;
            return p;
        },
        function () {
            return { count:0, total: 0};
        }
    );
    
    
    dc.barChart("#trading-volume")
        .width(500)
        .height(200)
        .dimension(marketDim)
        .group(buyVolume)
        .stack(sellVolume)
        .valueAccessor(function (d) {
            if (d.value.count == 0) {
                return 0;
            } else {
                return d.value.total;
            }
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Pair")
        .yAxisLabel("Volume")
        .yAxis().ticks(10);
}

function show_gainloss_timeline(ndx) {
    var dateDimension = ndx.dimension(dc.pluck("dd"));
    var monthlyMoveGroup = dateDimension.group().reduce(
        function (p, v) {
            p.count++;
            p.total += buy(v.Type) * v.Total;
            return p;
        },
        function (p, v) {
            p.count--;
            p.total -= buy(v.Type) * v.Total;
            return p;
        },
        function () {
            return { count:0, total: 0};
        }
    );
    var sellVolume = dateDimension.group().reduce(
        function (p, v) {
            p.count++;
            p.total += sell(v.Type) * v.Total;
            return p;
        },
        function (p, v) {
            p.count--;
            p.total -= sell(v.Type) * v.Total;
            return p;
        },
        function () {
            return { count:0, total: 0};
        }
    );
    
    var minDate = dateDimension.bottom(1)[0];
    var maxDate = dateDimension.top(1)[0];
    
    dc.barChart("#gain-loss-period")
        .width(1000)
        .height(200)
        .dimension(dateDimension)
        .group(monthlyMoveGroup)
        .stack(sellVolume)
        .valueAccessor(function (d) {
            if (d.value.count == 0) {
                return 0;
            } else {
                return d.value.total;
            }
        })
        .transitionDuration(500)
        .x(d3.time.scale().domain([minDate,maxDate]))
        .brushOn(false)
        .elasticX(true)
        .elasticY(true);
        
}
//Bar chart with profit for each pair
function show_profit(ndx) {
    var typeDim = ndx.dimension(dc.pluck("marketFirst"));
    var profit = typeDim.group().reduce(
        function (p, v) {
            p.count++;
            p.total += mult(v.Type) * v.Total;
            return p;
        },
        function (p, v) {
            p.count--;
            p.total -= mult(v.Type) * v.Total;
            return p;
        },
        function () {
            return { count:0, total: 0};
        }
    );
    
    dc.barChart("#profit")
        .width(1000)
        .height(300)
        .dimension(typeDim)
        .group(profit)
        .valueAccessor(function (d) {
            if (d.value.count == 0) {
                return 0;
            } else {
                return d.value.total;
            }
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Type")
        .yAxisLabel("Amount")
        .yAxis().ticks(20);
}

