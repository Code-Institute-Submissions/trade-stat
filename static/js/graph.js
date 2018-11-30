//Receive data + crossfilter
queue()
    .defer(d3.csv, "data/Binance-01mar-31may.csv")
    .await(makeGraphs);
    
function makeGraphs(error, tradeData) {
    var ndx = crossfilter(tradeData);
    
    show_trading_pairs(ndx);
    show_buysell_amount(ndx);
    
    dc.renderAll();
    
}

//Pie chart with amount of trades on pairs
function show_trading_pairs(ndx) {
    var dim = ndx.dimension(dc.pluck("Market"));
    var group = dim.group();
    
    dc.pieChart("#trading-pair")
        .width(500)
        .height(300)
        .dimension(dim)
        .group(group)
        .radius(300)
        .innerRadius(30)
        .transitionDuration(500)
        .renderLabel(true)
        .slicesCap(10)
        .legend(dc.legend());
}

//Bar chart with buy and sell type orders
function show_buysell_amount(ndx) {
    var dim = ndx.dimension(dc.pluck("Type"));
    var group = dim.group();
    
    dc.barChart("#buy-sell-amount")
        .width(500)
        .height(300)
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Type")
        .yAxis().ticks(20);
        
}