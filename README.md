<h1>Binance Trade Stat</h1>
<p>
    This dashboard made to help people who trading on cryptocurrency exchange to 
    control their traiding history and do some analytics using diffenct charts. 
    Exchanges by them selfs don't provide any statistics about you trades and 
    results and some people don't have any control or they
    have to work with exel and do formulas to get the result, so now they just 
    need to upload csv file and see the result.
</p>
<p>
    At the moment this is just basic charts that visualise yours traiding results 
    using csv file from cryptocurrency exchange.
    But there is a lot of options to improve and give more functionality for 
    analysys for people.
    At this moment it works only with Binance platform.
</p>

<h2>UX</h2>
<p>
    This website focusing on people who are trading on crypto assets markets. On 
    this website people can see markets and assets where they been more active 
    and compare them to each other. There is different filters and charts that 
    help people to achieve their goal.
</p>
<ul>
    <li>
        As user I want to have control over my trades and I need a tool that can
        help me to analyze and save my time and i can achive that by using this 
        website.
    </li>
</ul>
<h2>Features</h2>
<h3>Existing Features</h3>
<ul>
    <li>
        Guide - Here you can show and hide tips about the dashboard by click.
    </li>
    <li>
        Reset - Here you can reset all filterswith one click.
    </li>
    <li>
        Market selector - Here you can choose between markets. In this menu 
        oposite each option I can see numbers of trades.
    </li>
    <li>
        Year selector - Here you can choose between years. In this menu 
        oposite each option I can see numbers of trades.
    </li>
    <li>
        Month selector - Here you can choose between months. In this menu 
        oposite each option I can see numbers of trades.
    </li>
    <li>
        Volume per asset (PieChart) - Here you can see total market volume 
        splited between different assets and compare them.
    </li>
    <li>
        Compare volume between assets (Stacked BarChart) - Here you can compare 
        total, buy and sell volumes between assets.
    </li>
    <li>
        Volume (BarChart) - Here you can see buy and sell volumes separtly and 
        difference between them. 
    </li>
    <li>
        Gain/Loss (BarChart) - Here you can see trading result is it possitive 
        or negative. 
    </li>
    <li>
        Daily volume (Timeline BarChart) - Here you can see volumes on timeline 
        and to choose specific day or period for more details. It hasvertical 
        scrolling function.
    </li>
</ul>
<h3>Features Left to Implement</h3>
<ul>
    <li>
        Make some section shows total volume and percent of gain/loss from it.
    </li>
    <li>
        Fix pie chart issue.
    </li>
</ul>
<h2>Technologies Used</h2>
<ul>
    <li>
        <a href="https://getbootstrap.com/docs/3.3/">Bootstrap</a>
        <ul>
            <li>For template and to make website mobile responsive</li>
        </ul>
    </li>
    <li>
        <a href="https://dc-js.github.io/dc.js/">DC</a>
        <ul>
            <li>Used for rendering charts</li>
        </ul>
    </li>
    <li>
        <a href="http://square.github.io/crossfilter/">Crossfilter</a>
        <ul>
            <li>Used for filtering data charts</li>
        </ul>
    </li>
    <li>
        <a href="https://d3js.org/">D3</a>
        <ul>
            <li>Used for manipulating data</li>
        </ul>
    </li>
    <li>
        <a href="https://caolan.github.io/async/queue.js.html">Queue</a>
        <ul>
            <li>Used for data structuring</li>
        </ul>
    </li>
    <li>
        <a href="https://caolan.github.io/async/queue.js.html">JQuery</a>
        <ul>
            <li>Used for simplify DOM manipulation.</li>
        </ul>
    </li>
</ul>
<h2>Testing</h2>
<p>
    All tests going from top and from left to right
</p>
<p>
    During the test on different devices and browsers no problems has been found.
</p>
<h5>Guide</h5>
<ul>
    <li>
        Show and Hide buttons working well. Show button showing text and Hide 
        button hidding it.
    </li>
</ul>
<h5>Reset</h5>
<ul>
    <li>
        Reset All working well. All charts are reset after click on it.
    </li>
</ul>
<h5>Select Menus</h5>
<ul>
    <li>
        All 3 select menus working well. Everything is clickable and have no 
        issue. Working well with another charts.
    </li>
</ul>
<h5>PieChart</h5>
<ul>
    <li>
        Pie Chart is woking but with some issue. I can click on it slices select 
        one or more and legend is clickable as well. Working well with another 
        charts.
    </li>
</ul>
<h5>Stacked BarChart</h5>
<ul>
    <li>
        All bars are clickable and multy select working fine. Legend is working
        as well. No issue were found. Working well with another charts.
    </li>
</ul>
<h5>Volume BarChart</h5>
<ul>
    <li>
        All bars are clickable and working fine with another charts.
    </li>
</ul>
<h5>Gain/Loss BarChart</h5>
<ul>
    <li>
        All bars are clickable and multy select working fine. Possitive value is
        green bar and negative is red. Working well with another charts.
    </li>
</ul>
<h5>Time BarChart</h5>
<ul>
    <li>
        Horizontal scrolling working well. All bars are clickable and multy 
        select working fine. Brush working as well. Working well with another 
        charts.
    </li>
</ul>
<h3>Bugs</h3>
<ul>
    <li>
        PieChart have SliceCap(5) and legend as well and the rest going to Others
        and that's ok. But Legend is in alphabetical order and it shows assets 
        that not on PieChart. If I click Others on pieChart and after I choose
        on another chart this assets I will get value=empty of this element on 
        pie chart. At the moment i use SliceCap(12) to have all items on the 
        legend.
    </li>
</ul>
<h2>Deployment</h2>
<ol>
    <li>Log in to GitHub</li>
    <li>Go to my project page</li>
    <li>Settings</li>
    <li>Find GitHub section</li>
    <li>Choose master branch</li>
    <li>Press save</li>
    <li>Done</li>
    <li>
        <a href="https://leon2ev.github.io/trade-stat/">Binance Trade Stat</a>
    </li>
</ol>