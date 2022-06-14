$(".ToiletriesIcon").hover(function() {
    $("#ToiletriesDefault").addClass(HiddenIcon);
    $("#ToiletriesHover").removeClass(HiddenIcon);
}, function() {
    $("#ToiletriesDefault").removeClass(HiddenIcon);
    $("#ToiletriesHover").addClass(HiddenIcon);
});