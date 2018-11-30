//Receive data + crossfilter
queue()
    .defer(d3.csv, "data/Binance-01mar-31may.csv")
    .await(makeGraphs);
    
function makeGraphs(error, tradeData) {
    var ndx = crossfilter(tradeData);
    
    show_trading_pairs(ndx);
    
    dc.renderAll();
    
}

//Pie chart with amount of trades on pairs
function show_trading_pairs(ndx) {
    var dim = ndx.dimension(dc.pluck("Market"));
    var group = dim.group();
    
    dc.pieChart("#trading-pair")
        .width(500)
        .height(300)
        .radius(300)
        .innerRadius(30)
        .transitionDuration(500)
        .renderLabel(true)
        .slicesCap(10)
        .dimension(dim)
        .group(group)
        .legend(dc.legend());
        
        
}

