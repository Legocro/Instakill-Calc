//------------"Enter" detection for all input fields---------------//
      document.getElementById("dps")
        .addEventListener("keyup", function(event) {
          event.preventDefault();
          if (event.keyCode == 13) {
            document.getElementById("button").click();
          }
        });
        document.getElementById("endZone")
        .addEventListener("keyup", function(event) {
          event.preventDefault();
          if (event.keyCode == 13) {
            document.getElementById("button").click();
          }
        });
        document.getElementById("startingZone")
        .addEventListener("keyup", function(event) {
          event.preventDefault();
          if (event.keyCode == 13) {
            document.getElementById("button").click();
          }
        });
        document.getElementById("kumaEffect")
        .addEventListener("keyup", function(event) {
          event.preventDefault();
          if (event.keyCode == 13) {
            document.getElementById("button").click();
          }
        });
//------------"Enter" detection for all input fields-----------------//
//-------------------Main function---------------------------------//
      function hp() {
//------------------Setting global variables-----------------------//
        var endingZone = document.getElementById("endZone").value;
        var startingZone = document.getElementById("startingZone").value;
        var kumaLevel = document.getElementById("kumaEffect").value;
        var playerDps = new Decimal(document.getElementById("dps").value);
        var kumaEffect=8*(1-Math.exp(-kumaLevel*0.01));
        var zone = new Decimal(1);
        var dps1 = new Decimal(1);
        var constant = new Decimal(1);
        var playerDpsActual = playerDps.dividedBy(30);
//------------------Setting global variables-----------------------//
//------------------Getting the zone based on DPS input------------//
function mHp(){
          if (zone.lessThanOrEqualTo(140)) {
//------------------------Calculating HP---------------------------//
            if (zone % 5 === 0) {
              dps1 = constant.times(10 * (zone - 1 + Math.pow(1.55, (zone - 1))) * 10);
            } else {
              dps1 = constant.times(10 * (zone - 1 + Math.pow(1.55, zone - 1)));
            }
          } else if (zone <= 500) {
            if (zone % 5 === 0) {
              dps1 = constant.times(1390 + 10 * Math.pow(1.55, 139) * Math.pow(1.145, (zone - 140)) * 10);
            } else {
              dps1 = constant.times(1390 + 10 * Math.pow(1.55, 139) * Math.pow(1.145, (zone - 140)));
            }
          } else {
            var scale = 10 * Math.pow(1.55, 139) * Math.pow(1.145, 360);
            var scale3 = [];
            var scale2 = [];
            var zone2 = [];
            var zone4 = Math.floor(zone / 500) - 1;

            for (i = 0; i < zone4; i++) {
              var scale1 = i * 0.005 + 1.15;
              var zone1 = 500;
              scale2.push(scale1);
              zone2.push(zone1);

            }
            for (j = 0; j < zone4; j++) {
              scale3.push(Math.pow(scale2[j], zone2[j]));
            }
            /*for (m=0;m<zone4;m++)
            {
              scale4.push(scale3[m]*scalea[m]);
                
            }*/
            var hp = new Decimal(scale);
            for (var i = 0; i < scale3.length; i++) {
              hp = hp.times(scale3[i]);
            }
            var hpR = hp.times(Math.pow(1.15 + 0.005 * scale3.length, zone - (scale3.length + 1) * 500));
            if (zone % 5 === 0) {
              dps1 = hpR.times(10);
            } else {
              dps1 = hpR.times(1);
            }
          }
          }
           while (dps1.lte(playerDpsActual)){
      mHp();
      zone=zone.plus(2);
      }
//------------------Displaying the end zone if DPS is the choice of input-----//
        if (playerDps > 0) {
          var zones = zone - startingZone - 2;
          var display = zone - 2;
          document.getElementById("text").innerHTML = "up to zone " + display + ".";
        } else {
          var zones = endingZone - startingZone;
          document.getElementById("text").innerHTML = ".";
//-----------------Displaying the end zone if DPS is the choice of input-----//
        }
//-------Calculating the amount of time it takes to beat all the zones-------//
        if (kumaEffect === 0) {
          var seconds = (kumaEffect - Math.floor(kumaEffect)) * (1 * Math.floor(zones / 5) + (zones - Math.floor(zones / 5)) * (15 * (-1 + 10 - Math.ceil(kumaEffect)) + 1 * 1)) / 30 + (1 * Math.floor(zones / 5) + (zones - Math.floor(zones / 5)) * (15 * (-1 + 10 - Math.floor(kumaEffect)) + 1 * 1)) * (-kumaEffect + Math.floor(kumaEffect) + 1.0) / 30;
        } else {
          var seconds = (kumaEffect - Math.floor(kumaEffect)) * (1 * Math.floor(zones / 5) + (zones - Math.floor(zones / 5)) * (15 * (-1 + 10 - Math.ceil(kumaEffect)) + 1 * 1)) / 30 + (1 * Math.floor(zones / 5) + (zones - Math.floor(zones / 5)) * (15 * (-1 + 10 - Math.floor(kumaEffect)) + 1 * 1)) * (-kumaEffect + Math.floor(kumaEffect) + 1.0) / 30;
        }
        if (seconds < 0) {
          hours = 0;
          minutes = 0;
          seconds = 0;
        } else if (seconds >= 3600) {
          hours = Math.floor(seconds / 3600);
          minutes = Math.floor((seconds - hours * 3600) / 60);
          seconds = Math.floor(seconds - minutes * 60 - hours * 3600);
        } else if (seconds >= 60) {
          hours = 0;
          minutes = Math.floor(seconds / 60);
          seconds = Math.floor(seconds - minutes * 60);
        } else {
          hours = 0;
          minutes = 0;
          seconds = Math.floor(seconds);
        }
//-------------Calculating the amount of time it takes to beat all the zones-------//
//----------------------------------Displaying the results------------------------//
        document.getElementById("seconds").innerHTML = hours + " hours";
        document.getElementById("minutes").innerHTML = minutes + " minutes";
        document.getElementById("hours").innerHTML = seconds + " seconds";
        document.getElementById("instakill").innerHTML = "You can instakill for";
        document.getElementById("hours").innerHTML = seconds + " seconds";
//----------------------------------Displaying the results------------------------//
//-------------------Main function---------------------------------------//



      }
