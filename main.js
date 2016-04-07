var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=datasetMetadataSearch&q=id:a9a97996-3a55-46c8-9076-e5ebdefad6dc";

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}
