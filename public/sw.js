self.addEventListener('install', (a)=>{
    console.log('설치완료')
})

self.addEventListener('active', (a)=>{
    console.log('서비스워커 동작 시작되고 있음...')
})

self.addEventListener('fetch', (a)=>{
    console.log('데이터 요청시 처리...')
})

self.addEventListener('message', (event)=>{
    console.log('엣..? 메시지가', event.data)
    const option = {
        body: event.data.message,
        icon:'', //제목옆에 작은 원형이미지
        image:'', //내용 썸네일
        badge:'',
        vibrate:[200, 100, 300], //진동울리는 간격
        actions:[
            {action:'open', title:'자세히보기'},
            {action:'close', title:'닫기'},
        ]
    }

    self.registration.showNotification('title',option);
})


self.addEventListener('notificationclick', (event)=>{
    console.log(event.action)
    console.log(clients)
    if(event.action == 'open'){
        //자세히보기
        clients.openWindow('https://naver.com')
    }else{
        //닫기
        event.notification.close();
    }
});

