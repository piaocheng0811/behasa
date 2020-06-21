
//   Bit Gab   //

    // get use ids
    var blocked_countries=['india','bangladesh','pakistan','china']
    var users=[];

    var timer=setInterval(()=>{
        var items=$('li.item')
        var buttons=$('.addFriendButton');
        var user_links=$('li.item .product-info a');
        var country_elements=$('li.item .product-info span');

        for(var i=0;i<buttons.length;i++){
            var button=buttons[i];
            var id=$(button).attr('id').replace('friendfav-','');
            var name=$(user_links[i]).text();
            var a, country;
            var country_array=$(country_elements[i*3+2]).text().split(",");
            if(country_array.length>1){
                [a,country]=country_array;
            }else
                country=country_array[0]
            if(!blocked_countries.includes(country.trim().toLowerCase())){
                users.push(
                    {
                        id:id,
                        name:name,
                        country:country
                    }
                )
            }
            $(items[i]).remove()
        }
        $('#loadmorefindfriends').trigger('click');
    },2000)
    setTimeout(()=>{
        clearInterval(timer);
        var a = document.createElement('a');
        a.href = "data:application/octet-stream,"+encodeURIComponent(JSON.stringify(users));
        a.download = 'abc.json';
        a.click();
    },2000000);



    // get all user's profile
    var user_information=[];
    var current_user=11097;
    var fetch_count=0;
    var blocked_countries=['india','bangladesh','pakistan','china'];

    var timer=setInterval(()=>{
        console.log("fetched", fetch_count)
        var user_links=$('li.item .product-info a');
        var search_from=$(user_links[0]).data('user');
        $.getJSON(`https://www.bitgab.com/en/dashboard/ajax/findFriends.php?user=${current_user}&searchfrom=${search_from}&qname=&qusername=&qcity=&qcountry=&quniversity=&qcollege=&qprofession=null&qlevel=&school=0`, function(data) {
            var fetched_user_information, concat_data=[];
            if(fetch_count==0)
                fetched_user_information=data;
            else
                fetched_user_information=data.slice(1,19)
            fetched_user_information.map(item=>{
                concat_data.push({
                    id:item.id,
                    name:item.name,
                    email:item.email,
                    gender:item.gender,
                    country:item.countryname
                })
            })
            for(let j=concat_data.length-1;j>=0;j--){
                if(typeof concat_data[j].country!="undefined"){
                    if(blocked_countries.includes(concat_data[j].country.toLowerCase().trim())){  // if it is in china, india, pakistan,
                        concat_data.splice(j,1);
                    }
                }

            }
            user_information=user_information.concat(concat_data);
            fetch_count++;
            $('li.item').remove();
            $('#loadmorefindfriends').trigger('click');
        })
    }, 1000)
    var timeOut=setTimeout(()=>{
        clearInterval(timer);
        var a = document.createElement('a');
        a.href = "data:application/octet-stream,"+encodeURIComponent(JSON.stringify(user_information));
        a.download = 'abc.json';
        a.click();
    },1000000)







    setInterval(()=>{
        var buttons=$('.addFriendButton');
        for(var i=0;i<buttons.length;i++){
            var button=buttons[i];
            var s=0;
            for(var j=0;j<100000;j++){
                s+=j/3;
            }
            $(button).trigger('click');
            $(button).remove();
        }
        $('#loadmorefindfriends').trigger('click');
        // $('#loadmorerankings').trigger('click');
    },4000)


    // var user=24741;
    // var user=37999;
    // user=38063;//mine
    var user=24741;
    var block_lists=[35902];
    var target;
    var url="https://www.bitgab.com/en/dashboard/ajax/sendMessage.php";
    var msg=`
        Hello. How are you?
        Hope you are doing great.
        I am 28 years old and work as freelancer
        I have one great deal.
        It is for upwork.
        If you can create upwork account with his information, then i can work on upwork on your computer via anydesk or teamviewer.
        And can share my profit.
        I can earn more than 5000 usd with time being and can share 10% ~ 15%
        But the more i earn, share would be increased.
        Maybe you will doubt why i am not creating upwork account by myself, I can answer if you reply me.
        For trusting each other, we can do video call also and can have a great topic.
        When you are free, let me know.        
        skype: live:rstcom919
        Thanks, Best regards :)     
    `;

    var chat_users=$('.chat-user');
    for(var i=0;i<chat_users.length;i++){
        var user_type=$(chat_users[i]).attr('usertype');
        var id=$(chat_users[i]).attr('id');
        target=id.replace("user-",'')
        console.log(target);
        var form_data=new FormData();
        form_data.append('user',user);
        form_data.append('target',target)
        form_data.append('msg',msg);
        if(!block_lists.includes(target)){
            $.ajax({
                url:url,
                method:'post',
                data:form_data,
                contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
                processData: false,
                success:function (result){
                    console.log(result);
                },
                error:function(error){
                    console.log(error)
                }

            })
        }

    }
//



// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
//     </script>
    var script = document. createElement('script');
    script. src = '//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
    document. getElementsByTagName('head')[0]. appendChild(script);
    setTimeout(()=>{
        var next_button=$($(".pagination-next")[0]).find('a')[0];
        var profile_elements=$('div.lovefactory-thumbnail');
        var url="https://friendmatch.com/index.php?option=com_lovefactory&controller=friend&task=request";
        var msg=`
    Hello. How are you?
    I have one good deals, and want to discuss with you about that.
    And also, I want to be your friend, business partner.
    When you are available, if you get back to me, I would be very thanksful.
    Thanks, Cheers.`;
        for(var i=0;i<profile_elements.length;i++){
            var anchor_tag=$(profile_elements[i]).find('a');
            var href=$(anchor_tag[0]).attr('href');
            var temp_array=href.split("/");
            var user_id=temp_array[temp_array.length-1].replace(".html","");
            var form_data=new FormData();
            form_data.append('user_id',user_id);
            form_data.append('message',msg);
            console.log(user_id);
            $.ajax({
                async:false,
                url:url,
                method:'post',
                data:form_data,
                contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
                processData: false,
                success:function (result){
                    console.log(result);
                },
                error:function(error){
                    console.log(error)
                }

            })
        }
        $(next_button).trigger('click');
    }, 1500)




// Hello. How are you?
// I have one good deals, and want to discuss with you about that.
// And also, I want to be your friend, business partner.
// When you are available, if you get back to me, I would be very thanksful.
// Thanks, Cheers.


//InterPal
var url="https://interpals.net/pm.php";
var msg=`    
        This is the link of my linkedin regard for iptv app that i've made 
        It has many convenient functionalities and channels.
        Please visit and see this 
        https://www.linkedin.com/posts/xiao-jin-091039195_best-android-iptv-app-activity-6640292566162079744-xGF1
        If anyone want to make IPTV app like this, please ping me.        
    `
msg=`Hello. How are you?
If you know koean, you can see this video
youtube.com/watch?v=8KCqaivBIVM&feature=youtu.be
This seems to be good video for stock theory.
Now is the risky and also good chance for stock theory becoz of corona virus.
If anyone like to see this video, please subscribe. :)`
var threads=$('.pm_thread');
for(var i=0;i<threads.length;i++){
    var id=$(threads[i]).attr('id');
    target=id.replace("thread_",'')
    var form_data=new FormData();
    form_data.append('action','send_message');
    form_data.append('thread',target)
    form_data.append('message',msg);
    console.log(target);
    $.ajax({
        url: url,
        method: 'post',
        data: form_data,
        contentType: false,
        processData: false,
        success: function (result) {
            console.log(result);
        },
        error: function (error) {
            console.log(error)
        }
    })
}

//
