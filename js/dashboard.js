
  function updatePage() {
    $.getJSON(URI + "/api/json?jsonp=?", hudson)
  }
  
  function hudson(data) {
      $('body').empty();
      $.each(data.jobs, function(i,job){
          process_job(job)
      })
  }

  function process_job(job) {
    var animated = job.color.indexOf('_anime');
    var color = job.color.substring(0,job.color.length-6);
    if(animated == -1) {
        $('body').append("<div class='" + job.color + " job'>" + job.name + "</div>")
    } else {
        $('body').append("<div class='" + color + " job animated'>" + job.name + "</div>")
    }

    $('.animated').pulse({
        opacity: [0,1]
    }, {
       times: 3000
    });

  }

