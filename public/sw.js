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
    self.registration.showNotification('title',{
        body: event.data.message,
    });
})
