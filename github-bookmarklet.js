if(location.host == "github.com" && (x = location.href.indexOf('/tree/')) != -1) {
    repoBase = location.href.substring(0, x);
    branch = location.href.substring(x + 6);
    window.open(repoBase + '/compare/' + branch, '_self');
}
