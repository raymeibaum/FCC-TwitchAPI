"use strict";
$(function() {
  var twitchUsers = ["freecodecamp", "romnusontwitch", "ESL_SC2", "OgamingSC2", "beingds", "storbeck", "brunofin", "comster404", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "Brotatoe"];
  var $results = $('#results');
  var $tile;
  
  $.each(twitchUsers, function(index, user) {
    $.getJSON(`https://api.twitch.tv/kraken/streams/${user}?callback=?`, function(twitch) {
      if (twitch.error) {
        $tile = $(`<div class="well well-sm"><h3><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> <a target="_blank" href="https://www.twitch.tv/${user}">${user}</a> account closed.</h3></div>`);
      } else if (twitch.stream) {
        $tile = $(`<div class="alert alert-success"><h3><i class="fa fa-toggle-on" aria-hidden="true"></i> <a target="_blank" href="https://www.twitch.tv/${user}">${user}</a> is online and currently streaming ${twitch.stream.game}.</h3></div>`);
      } else {
        $tile = $(`<div class="alert alert-danger"><h3><i class="fa fa-toggle-off" aria-hidden="true"></i> <a target="_blank" href="https://www.twitch.tv/${user}">${user}</a> is offline.</h3></div>`);
      }
      $results.append($tile);
    });
  });
})