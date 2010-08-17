
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
    console.log(job);
    if(animated == -1) {
        $('body').append("<div class='" + job.color + " job'><a href='" + job.url + "'>" + job.name + "</a></div>")
    } else {
        $('body').append("<div class='" + color + " job animated'><a href='" + job.url + "'>" + job.name + "</a></div>")
    }

    $('.animated').pulse({
        opacity: [0,1]
    }, {
       times: 3000
    });

  }

