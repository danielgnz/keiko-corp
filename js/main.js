$(document).ready(function(){function i(i,s){$("#mc_submit i").removeClass(i).addClass(s)}$("#tslider").owlCarousel({items:1,navigation:!0,pagination:!1,slideSpeed:300,paginationSpeed:400,singleItem:!0,responsive:!0,autoPlay:!0,transitionStyle:"fade"}),$("#submit_form").submit(function(){$("#mc_submit").attr("disabled","disabled"),i("icon","loading")}),$("#submit_form").length&&$("#submit_form").ajaxChimp({callback:function(s){"success"===s.result?(i("loading","icon"),$("#mc_submit").removeAttr("disabled","disabled"),$("#submit_form #mc-email").val(""),$("#error_msg").hide(),$("#success_msg").show()):(i("loading","icon"),$("#success_msg").hide(),$("#error_msg").show(),$("#mc_submit").removeAttr("disabled","disabled"))}})});