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
        help me to analyze and save my time.
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
        and to choose specific day or period for more details.
    </li>
</ul>
<h3>Features Left to Implement</h3>
<ul>
    <li>
        Make some section shows total volume and percent of gain/loss from it.
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
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

Credits
Content
The text for section Y was copied from the Wikipedia article Z
Media
The photos used in this site were obtained from ...
Acknowledgements
I received inspiration for this project from X