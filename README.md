github
======

A bookmarklet that allows you to compare the branch you're viewing to the default branch of that repository.

To use, create a bookmark with the following minified version of the code
as the URL:

    if(location.host=="github.com"&&(x=location.href.indexOf("/tree/"))!=-1){repoBase=location.href.substring(0,x);branch=location.href.substring(x+6);window.open(repoBase+"/compare/"+branch,"_self")}
