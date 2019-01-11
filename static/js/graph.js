//Receive data + crossfilter
queue()
    .defer(d3.csv, "data/Binance-01mar-31may.csv")
    .await(makeGraphs);
    
function makeGraphs(error, tradeData) {
    var ndx = crossfilter(tradeData);
    var all = ndx.groupAll();
    
    //string to number
    tradeData.forEach(function(d){
        d.Date = ["Date(UTC)"];
        d.Price = parseFloat(d.Price);
        d.Amount = parseFloat(d.Amount);
        d.Total = parseFloat(d.Total);
        d.Fee = parseFloat(d.Fee);
    });
    show_trading_pairs(ndx);
    show_buysell_orders(ndx);
    show_trading_volume(ndx);
    show_gainloss_timeline(ndx);
    
    dc.renderAll();
}
 
//Pie chart with amount of trades on pairs
function show_trading_pairs(ndx) {
    var marketDim = ndx.dimension(dc.pluck("Market"));
    var tradingPairs = marketDim.group();
    
    
    dc.pieChart("#trading-pair")
        .width(500)
        .height(300)
        .dimension(marketDim)
        .group(tradingPairs)
        .radius(300)
        .innerRadius(30)
        .transitionDuration(500)
        .renderLabel(true)
        .slicesCap(10)
        .legend(dc.legend());
}

//Bar chart with buy and sell type orders
function show_buysell_orders(ndx) {
    var typeDim = ndx.dimension(dc.pluck("Type"));
    var buySellOrders = typeDim.group();
    
    dc.barChart("#buy-sell-orders")
        .width(500)
        .height(300)
        .dimension(typeDim)
        .group(buySellOrders)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Type")
        .yAxisLabel("Amount")
        .yAxis().ticks(20);
}

//Bar chart with trading volume per pair
function show_trading_volume(ndx) {
    var marketDim = ndx.dimension(dc.pluck("Market"));
    
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
    
    dc.barChart("#trading-volume")
        .width(500)
        .height(300)
        .dimension(marketDim)
        .group(tradingVolume)
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
        .xAxisLabel("Market")
        .yAxisLabel("Volume")
        .yAxis().ticks(20);
}

function show_gainloss_timeline(ndx) {
    var dateDimension = ndx.dimension(dc.pluck("Date(UTC)"));
    var monthlyMoveGroup = dateDimension.group().reduce(
        function (p, v) {
            p.count++;
            p.total += v.buy;
            return p;
        },
        function (p, v) {
            p.count--;
            p.total -= v.buy;
            return p;
        },
        function () {
            return { count:0, total: 0};
        }
    );
    
    dc.lineChart("#gain-loss-period")
        .width(1000)
        .height(500)
        .dimension(dateDimension)
        .group(monthlyMoveGroup)
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
        .elasticY(true);
}

function diff(value) {
	let buy;
	if(value.Type == "BUY") {
		let buy = true;
	} else {
		let buy = false;
	}
	if(buy) {
		value.Total++;
	} else {
		value.Total--;
	}
	
	return buy;
	console.log(buy);
}

