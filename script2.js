(function () {
    var cookieName = 'ab_test_group';
    // check existing group
    function getCookie(name) {
        var v = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return v ? v.pop() : '';
    }
    var group = getCookie(cookieName);
    if (!group) {
        // 50/50 split
        group = (Math.random() < 0.5) ? 'A' : 'B';
        document.cookie = cookieName + '=' + group + '; path=/';
    }
    // act on bucket
    if (group === 'B') {
        window.location.href = 'http://localhost:3001/thing'
        console.log('User in group B');
        return;
    } else {
        console.log('User in group A');
    }
})();
