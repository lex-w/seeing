function userInit() {
    var html = "";
    $.ajax({
    	url: '../json/main.json',
    	type: 'get',
    	dataType: 'json',
    })
    .done(function(data) {
    	console.log(data);
    	var tempObj = data["data"]["userlist"];
    	var userLength = tempObj.length;
    	for(var i = 0; i < userLength; i++){
    		html +='<div class="sort_list"><a href = "javascript:;" >'
		    	 +'<div class = "num_logo" ><img src = "'+ tempObj[i].imgpath +'" alt = "" ></div> '
		    	 +'<div class = "num_name" >'+ tempObj[i].name +'</div> '
		    	 +'</a> </div>';
    	}
    	$(".sort_box").append(html);
    })
    .fail(function() {
    	alert("数据加载失败");
    })
    .always(function() {
    	console.log("complete");
    	// 数据加载完成之后进行排序
    	initials();
    });
}

userInit();
