  ons.bootstrap().controller('LoginController', function($http,$httpParamSerializer,$timeout) {
    if(localStorage.getItem('user_id') != null){
     $timeout(function(){
         myNavigator.pushPage('page2.html', {data: {title: 'Page 2'}});
      },50); 
     return false;
     }  
    this.username = "";
    this.code = "";
    this.school = "";
    this.grade = "";
    this.area = ""; 
    this.phone = "";
    this.mobile = "";
    this.std_num = "";
    this.gender = "";
    this.code_meli = "";
    
   this.login_1 = function(){
      if(this.code  != '') 
          this.code_meli = Number(this.code);
      
       if(this.code_meli  == '')
        {
           ons.notification.alert({
                title: 'خطا',
                buttonLabel:"بستن " ,
                message: 'کد ملی را وارد کنید !'
            });
        }
       else if(this.code_meli  != '' && this.code_meli.toString().length != 10)
        { 
             ons.notification.alert({
                title: 'خطا',
                buttonLabel:"بستن " ,
                message: 'کد ملی وارد شده معتبر نیست !'
            });
        }   
        else
        {
           document.getElementById('loading').removeAttribute('style');     
            $http({
                method: 'POST',
                url: base_url+'login/HamiDaMin23QZYTRRE7RE34z82',
                data : $httpParamSerializer({
                    code : this.code_meli,
                 }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then(function successCallback(response) {
                            document.getElementById('loading').setAttribute('style','display:none;'); 
                            if(response.data.done == 0){
                               ons.notification.alert({
                                        title: 'خطا',
                                        buttonLabel:"بستن " ,
                                        messageHTML: response.data.error
                                    });
                            }
                            else if(response.data.done == 1)
                            {
                                   localStorage.setItem('user_id',response.data.user_id);
                                   localStorage.setItem('name',response.data.name);
                                   localStorage.setItem('code',response.data.code);
                                   localStorage.setItem('exam',JSON.stringify(response.data.exam));
                                   localStorage.setItem('articles',JSON.stringify(response.data.articles));
                                   myNavigator.pushPage('page2.html', {data: {title: 'Page 2'}});
                            }
                            else
                            {
                                 ons.notification.alert({
                                    title: 'خطا',
                                    buttonLabel:"بستن " ,
                                    message: 'خطا در برقراری ارتباط دوباره تلاش کنید !!'
                                });
                            }
                           
                        }, function errorCallback(response) {
                            document.getElementById('loading').setAttribute('style','display:none;'); 
                              ons.notification.alert({
                                title: 'خطا',
                                buttonLabel:"بستن " ,
                                message: 'خطا در برقراری ارتباط دوباره تلاش کنید !!'
                           });
                        return false;
                 });
        }  

   };

    this.submit = function(){
     if(this.code  != '') 
          this.code = Number(this.code);
       
       if(this.mobile  != '')     
        this.mobile = Number(this.mobile);
       
        if(this.username  == '')
        {
            ons.notification.alert({
                title: 'خطا',
                buttonLabel:"بستن " ,
                message: 'نام و نام خانوادگی را وارد کنید !'
            });
        }
        else if(this.code  == '')
        {
           ons.notification.alert({
                title: 'خطا',
                buttonLabel:"بستن " ,
                message: 'کد ملی را وارد کنید !'
            });
        }
         else if(this.code  != '' && this.code.toString().length != 10)
        { 
             ons.notification.alert({
                title: 'خطا',
                buttonLabel:"بستن " ,
                message: 'کد ملی وارد شده معتبر نیست !'
            });
        }
        else if(this.school  == '')
        {
           ons.notification.alert({
                title: 'خطا',
                buttonLabel:"بستن " ,
                message: 'نام مدرسه را وارد کنید !'
            });
        }
        else if(this.gender  == '')
        {
           ons.notification.alert({
                title: 'خطا',
                buttonLabel:"بستن " ,
                message: 'جنسیت را انتخاب کنید !'
            });
        }
        else if(this.grade  == '')
        {
           ons.notification.alert({
                title: 'خطا',
                buttonLabel:"بستن " ,
                message: 'مقطع تحصلی را انتخاب کنید !'
            });
        }
        else if(this.area  == '')
        {
           ons.notification.alert({
                title: 'خطا',
                buttonLabel:"بستن " ,
                message: 'ناحیه آموزش و پروش را انتخاب کنید !'
            });
        }
        else if(this.phone  == '')
        {
           ons.notification.alert({
                title: 'خطا',
                buttonLabel:"بستن " ,
                message: 'تلفن ثابت را وارد کنید !'
            });
        }
         else if(this.mobile  == '')
        {
           ons.notification.alert({
                title: 'خطا',
                buttonLabel:"بستن " ,
                message: 'تلفن همراه را وارد کنید !'
            });
        }
         else if(this.mobile  != '' && this.mobile.toString().length != 10)
        { 
             ons.notification.alert({
                title: 'خطا',
                buttonLabel:"بستن " ,
                message: 'تلفن همراه وارد شده معتبر نیست !'
            });
        }
       
        else
        {
            document.getElementById('loading').removeAttribute('style');     
            $http({
                method: 'POST',
                url: base_url+'register/HamiDaMin23QZYTRRE7RE34z82',
                data : $httpParamSerializer({
                    name : this.username,
                    code : this.code,
                    school : this.school,
                    grade : this.grade,
                    area : this.area,
                    phone : this.phone,
                    mobile : this.mobile,
                    std_num : this.std_num,
                    gender : this.gender
                 }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then(function successCallback(response) {
                            document.getElementById('loading').setAttribute('style','display:none;'); 
                            if(response.data.done == 0){
                               ons.notification.alert({
                                        title: 'خطا',
                                        buttonLabel:"بستن " ,
                                        messageHTML: response.data.error
                                    });
                            }
                            else if(response.data.done == 1)
                            {
                                   localStorage.setItem('user_id',response.data.user_id);
                                   localStorage.setItem('name',response.data.name);
                                   localStorage.setItem('code',response.data.code);
                                   localStorage.setItem('exam',JSON.stringify(response.data.exam));
                                   localStorage.setItem('articles',JSON.stringify(response.data.articles));
                                   myNavigator.pushPage('page2.html', {data: {title: 'Page 2'}});
                            }
                            else
                            {
                                 ons.notification.alert({
                                    title: 'خطا',
                                    buttonLabel:"بستن " ,
                                    message: 'خطا در برقراری ارتباط دوباره تلاش کنید !!'
                                });
                            }
                           
                        }, function errorCallback(response) {
                            document.getElementById('loading').setAttribute('style','display:none;'); 
                              ons.notification.alert({
                                title: 'خطا',
                                buttonLabel:"بستن " ,
                                message: 'خطا در برقراری ارتباط دوباره تلاش کنید !!'
                           });
                        return false;
                 });
           
            //
        }
      
     }; 
      
 })

 .controller('SelectController', function($sce) { 
       this.exam = JSON.parse(localStorage.getItem('exam'));
       this.description = $sce.trustAsHtml(this.exam[0].description);
       this.img = img_url+'exam/'+this.exam[0].picname;
       this.logout = function(){
           localStorage.clear();
           myNavigator.pushPage('page1.html', {data: {title: 'Page 1'}});
       };
   })


  .controller('ArticleController', function($http,$httpParamSerializer,$sce,$scope) { 
      this.articles = JSON.parse(localStorage.getItem('articles'));
      $scope.finished = 0;
      for(var i=0;i<this.articles.length;i++)
          this.articles[i].description = $sce.trustAsHtml(this.articles[i].description);
      if(this.articles.length != 0)
         localStorage.setItem('exam_id',this.articles[0].exam_id); 
       
       this.exam_start = function(){
          document.getElementById('loading').removeAttribute('style');     
            $http({
                method: 'POST',
                url: base_url+'exam/HamiDaMin23QZYTRRE7RE34z82',
                data : $httpParamSerializer({
                    user_id : localStorage.getItem('user_id'),
                    exam_id : localStorage.getItem('exam_id')
                 }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then(function successCallback(response) {
                            document.getElementById('loading').setAttribute('style','display:none;'); 
                            if(response.data.done == 0){
                               $scope.finished=1;
                               this.exam = JSON.parse(localStorage.getItem('exam'));
                               this.exam[0].ended = 1;
                               localStorage.setItem('exam',JSON.stringify(this.exam));
                               ons.notification.alert({
                                        title: 'خطا',
                                        buttonLabel:"بستن " ,
                                        messageHTML: response.data.error
                                    });
                            }
                            else if(response.data.done == 1)
                            {
                                   localStorage.setItem('questions',JSON.stringify(response.data.questions));
                                   localStorage.setItem('remain',response.data.remaining_time);
                                   myNavigator.pushPage('page4.html', {data: {title: 'Page 4'}});
                            }
                            else
                            {
                                 ons.notification.alert({
                                    title: 'خطا',
                                    buttonLabel:"بستن " ,
                                    message: 'خطا در برقراری ارتباط دوباره تلاش کنید !!'
                                });
                            }
                           
                        }, function errorCallback(response) {
                            document.getElementById('loading').setAttribute('style','display:none;'); 
                              ons.notification.alert({
                                title: 'خطا',
                                buttonLabel:"بستن " ,
                                message: 'خطا در برقراری ارتباط دوباره تلاش کنید !!'
                           });
                        return false;
                 });
       };

        this.logout = function(){
           localStorage.clear();
           myNavigator.pushPage('page1.html', {data: {title: 'Page 1'}});
       };

   })


   
   .controller('ExamController', function($http,$httpParamSerializer) { 
         this.ans = [];
         if(localStorage.getItem('answers') != null){
           var answers = JSON.parse(localStorage.getItem('answers'));
           for(var j=0;j<answers.length;j++){
               this.ans.push(answers[j][1]);
           }
         }
         else
         {
            var answers = [];
         }
         
         this.questions = JSON.parse(localStorage.getItem('questions'));
         this.remain = localStorage.getItem('remain');

         this.img_q = img_url+'question/'; 
         this.img_a = img_url+'answer/'; 
         
         this.get_answer = function(a_id,q_id){
              var question_id = q_id;
              var answer_id = a_id;

                var exist = 0;
                for (var i = 0; i < answers.length; i++) {
                if (answers[i][0] == 'question_'+question_id) {
                    exist = 1;
                    break;
                } else {
                    exist = 0;
                }
                }

                if (exist == 1) {
                answers[i][1] = answer_id;
                } else {
                answers.push(['question_'+question_id, answer_id]);
                }
                localStorage.setItem('answers', JSON.stringify(answers));
           };

            this.countdown = function countdown( elementName, minutes, seconds )
            {
                var element, endTime, hours, mins, msLeft, time;

                function twoDigits( n )
                {
                    return (n <= 9 ? "0" + n : n);
                }

                function updateTimer()
                {
                    msLeft = endTime - (+new Date);
                    if ( msLeft < 1000 ) {
                        element.innerHTML = "00:00";
                         document.getElementById('loading').removeAttribute('style');     
                         $http({
                            method: 'POST',
                            url: base_url+'finish/HamiDaMin23QZYTRRE7RE34z82',
                            data : $httpParamSerializer({
                                user_id : localStorage.getItem('user_id'),
                                exam_id : localStorage.getItem('exam_id'),
                                answers : localStorage.getItem('answers')
                            }),
                            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                        }).then(function successCallback(response) {
                                        document.getElementById('loading').setAttribute('style','display:none;'); 
                                        if(response.data == 1)
                                        {
                                            this.exam = JSON.parse(localStorage.getItem('exam'));
                                            this.exam[0].ended = 1;
                                            localStorage.setItem('exam',JSON.stringify(this.exam));
                                            myNavigator.pushPage('page5.html', {data: {title: 'Page 5'}});
                                        }
                                        else
                                        {
                                            ons.notification.alert({
                                                title: 'خطا',
                                                buttonLabel:"بستن " ,
                                                message: 'خطا در برقراری ارتباط دوباره تلاش کنید !!'
                                            });
                                        }
                                    
                                    }, function errorCallback(response) {
                                        document.getElementById('loading').setAttribute('style','display:none;'); 
                                        ons.notification.alert({
                                            title: 'خطا',
                                            buttonLabel:"بستن " ,
                                            message: 'خطا در برقراری ارتباط دوباره تلاش کنید !!'
                                    });
                                    return false;
                            });

                   
                 } else {
                        time = new Date( msLeft );
                        hours = time.getUTCHours();
                        mins = time.getUTCMinutes();
                        element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
                        setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
                    }
                }

                element = document.getElementById( elementName );
                endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
                updateTimer();
            };


            this.countdown( "countdown", parseInt(this.remain/60), this.remain%60 );  


          this.finish = function ( address_id ) {
             ons.notification.confirm({
                    title : "پیام",
                    message: 'برای ثبت پاسخ ها و پایان آزمون اطمینان دارید ؟',
                    buttonLabels : ['خیر','بلی'],
                        callback: function(idx) {
                            switch (idx) {
                                case 0:
                                   break;
                                case 1:
                                   document.getElementById('loading').removeAttribute('style');     
                                    $http({
                                        method: 'POST',
                                        url: base_url+'finish/HamiDaMin23QZYTRRE7RE34z82',
                                        data : $httpParamSerializer({
                                            user_id : localStorage.getItem('user_id'),
                                            exam_id : localStorage.getItem('exam_id'),
                                            answers : localStorage.getItem('answers')
                                        }),
                                        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                                    }).then(function successCallback(response) {
                                                    document.getElementById('loading').setAttribute('style','display:none;'); 
                                                    if(response.data == 1)
                                                    {
                                                        this.exam = JSON.parse(localStorage.getItem('exam'));
                                                        this.exam[0].ended = 1;
                                                        localStorage.setItem('exam',JSON.stringify(this.exam));
                                                        myNavigator.pushPage('page5.html', {data: {title: 'Page 5'}});
                                                    }
                                                    else
                                                    {
                                                        ons.notification.alert({
                                                            title: 'خطا',
                                                            buttonLabel:"بستن " ,
                                                            message: 'خطا در برقراری ارتباط دوباره تلاش کنید !!'
                                                        });
                                                    }
                                                
                                                }, function errorCallback(response) {
                                                    document.getElementById('loading').setAttribute('style','display:none;'); 
                                                    ons.notification.alert({
                                                        title: 'خطا',
                                                        buttonLabel:"بستن " ,
                                                        message: 'خطا در برقراری ارتباط دوباره تلاش کنید !!'
                                                });
                                                return false;
                                        });
                                   break;
                        }
                    }
           });
          };

   })

.controller('FinishController', function() {
     this.logout = function(){
           localStorage.clear();
           myNavigator.pushPage('page1.html', {data: {title: 'Page 1'}});
     };
})


.controller('ErrorController', function($http,$httpParamSerializer) {
     this.logout = function(){
           document.getElementById('loading').removeAttribute('style');     
            $http({
                method: 'POST',
                url: base_url+'finish/HamiDaMin23QZYTRRE7RE34z82',
                data : $httpParamSerializer({
                    user_id : localStorage.getItem('user_id'),
                    exam_id : localStorage.getItem('exam_id'),
                    answers : localStorage.getItem('answers')
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then(function successCallback(response) {
                            document.getElementById('loading').setAttribute('style','display:none;'); 
                            if(response.data == 1)
                            {
                                this.exam = JSON.parse(localStorage.getItem('exam'));
                                this.exam[0].ended = 1;
                                localStorage.setItem('exam',JSON.stringify(this.exam));
                                myNavigator.pushPage('page5.html', {data: {title: 'Page 5'}});
                            }
                            else
                            {
                                ons.notification.alert({
                                    title: 'خطا',
                                    buttonLabel:"بستن " ,
                                    message: 'خطا در برقراری ارتباط دوباره تلاش کنید !!'
                                });
                            }
                        
                        }, function errorCallback(response) {
                            document.getElementById('loading').setAttribute('style','display:none;'); 
                            ons.notification.alert({
                                title: 'خطا',
                                buttonLabel:"بستن " ,
                                message: 'خطا در برقراری ارتباط دوباره تلاش کنید !!'
                        });
                        return false;
                });
     };
});