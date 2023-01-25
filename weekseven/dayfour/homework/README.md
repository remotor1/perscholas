Build Your HTML
Create your html boilerplate in the index.htmlfile.
Add a new file called style.cssand link it to the HTML file.
In the body of your HTML, use header, main, and footertags to clearly define the different parts of the page.
Use an h1tag for the site title and an h2for the subtitle inside the page header.
Use navtags inside the page header to create an accessible navigation. Follow the example in the W3C Web Accessibility Initiative (WAI) Guidelines to format your navigation:

Wrap each link in an anchor tag
Wrap each anchor tag in a list item
Wrap all of the list item tags in an unordered list tag
Place the unordered list inside the the nav tag and give it attributes for aria-label="Main Navigation"and role="navigation"
Mark up both of the blog posts using the articletag.
Use this W3C WAI Guideline example, to help you structure your blog post content. Follow the pattern! Make sure there is a ptag that contains some lorem ipsum text (Remember you can create this with Emmet by typing p>loremand pressing tab)!
Make sure your images all have altattributes so that they are accessible.
Inside the page footer, use the same technique you used earlier to create a semantic and accessible navigation, using a wrapping navtag, unordered list and the aria attributes.
Add a copyright in the footer. For the © symbol, use an html entity.
Make sure to add and commit your changes when you've got the html done!

Style Your Page
Use a borderonly on the left side of the page's htmlelement. It should have a width of 5pxand a color of lightgray.
Set the bodyelement's min-heightto be at least 100% of the viewport height. Also, use the font-familyproperty to set the entire page to use sans-seriffonts.
Give the bodya max-widthof 1000pxand center it on the page with the margin auto technique.
The border is too close to our text and we've got an issue with margin-collapse at the top of the page! Add paddingto the header, mainand footerelements of 1remon the top and bottom and 2remon the left and right to fix these issues.
For the h1on the page we want the color to be tomato.
Set all of the images to have a widthof 100%.
For your site navigation, you'll need to remove all of the padding on the ulelements and then set it's list-style-typeto none. It would be a good idea to use a class to style the navigation so that you can still make a bulleted list on your page. Use Flexbox to style the ulfor the navigation elements. On the top navigation use the space-betweenrule to have the menu items spread across their container evenly. Set the color for the anchors inside the main navigation to be lightgrayand the footer navigation to be tomato.
Style the title of each of your blog posts so that they are larger.
Style the 'continues...' anchor tags so that they are aligned to the right and are bold and tomato colored.
Set the margin on the bottom the articletags to be 4rem. Also, add a 1pxsolid border in lightgrayto the bottom of each one and give each padding on the bottom of 2rem.
For the ptag inside your article, use the pseudo-element ::first-letter to style the drop cap and set it's color to lightgray.
Style the copyright so it is lightgray.
Awesome job, add, commit and push changes to create your pull request!

Part 2
REMAKE ENTIRE PROJECT IN REACT and deploy to NETLIFY
Use App.js, Header.js, Nav.js, Article.js, Footer.js
Deploy on Netlify
Link github to netlify for free

Run Build command in your app in the command line (For React app only)
npm run build
Drag and drop folder from your computer into netlify

Submission
In the github readme for your React Application - Remove all the React boilerplate information and replace with the following:

# [Netlify Live Link](netlify link here)

# [Github pages Live Link](github pages link of html version)

# [Github link of html version](github for html version here)
