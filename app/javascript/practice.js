$(function(){

//1 要素取得

  let form=$('#Form')   


//2 対象要素にイベント設置

  form.on('submit',function(e){

    
//3 イベント発生時の処理を記述

    alert('click')
    e.preventDefault()
    let element=$('#Btn') 

    element.css("background-color","pink")


//発展変
// let formData=new FormData(this);

//     $.ajax({
//       url: "/tweets",   //リクエスト先のURL
//       type: "POST",     //HTTPメソッド
//       data: formData,   //リクエストとして送るデータ。rails側ではparamsとして扱われる
//       dataType: 'json', 
//       processData: false,
//       contentType: false
//     })
//     .done(function(response){
//       alert(response.text)
//     })

 })
 

})

