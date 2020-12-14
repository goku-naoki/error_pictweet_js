$(function(){

//投稿する対するクリックイベントを実行しましょう

    //1 要素取得
      let dom=$('#text')   

    //2 対象要素にイベント設置

      dom.on('click',function(){

        
    //3 イベント発生時の処理を記述
        dom.text('Ajax投稿する')
      })






//SENDを押した際にサブミットイベントを実行しましょう

    //1 要素取得
      let form=$('#Form')   


    //2 対象要素にイベント設置

      form.on('submit',function(e){

        
    //3 イベント発生時の処理を記述
        e.preventDefault()
        let elements=$('#Btn') 

        element.css("background-color","pink")


    //発展変
    // let formData=new FormData(this);

    //     $.ajax({
    //       url: "/tweet",   //リクエスト先のURL
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

