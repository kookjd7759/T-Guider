// 지도를 생성합니다.
var mapContainer = document.getElementById('map'),
    mapOption = {
        center: new kakao.maps.LatLng(37.59, 126.88),
        level: 3
    };

// 지도를 생성합니다.
var map = new kakao.maps.Map(mapContainer, mapOption);

function map_MovePosition(x, y) {
    var moveLatLon = new kakao.maps.LatLng(x, y);
    map.panTo(moveLatLon);
}

function map_makeImageMarker(x, y){
    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
        imageSize = new kakao.maps.Size(64, 69),
        imageOption = {offset: new kakao.maps.Point(27, 69)};

    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(x, y);

    var marker = new kakao.maps.Marker({
        position: markerPosition, 
        image: markerImage
    });

    marker.setMap(map);  
}

function map_makeLine(x1, y1, x2, y2){
    var linePath = [
        new kakao.maps.LatLng(x1, y1),
        new kakao.maps.LatLng(x2, y2)
    ];

    var polyline = new kakao.maps.Polyline({
        path: linePath,
        strokeWeight: 6,
        strokeColor: '#255bbd',
        strokeOpacity: 1,
        strokeStyle: 'dash'
    });

    polyline.setMap(map);  
}

function openChat() {
    document.querySelector('.button_chat').style.display = 'none';
    document.getElementById('chatbox').style.display = 'block';
}

function closeChat() {
    document.querySelector('.button_chat').style.display = 'block';
    document.getElementById('chatbox').style.display = 'none';
}

function openWindow() {
    document.querySelector('.button_chat').style.display = 'none';
    document.getElementById('test').style.display = 'block';
}

function closeWindow() {
    document.querySelector('.button_chat').style.display = 'block';
    document.getElementById('test').style.display = 'none';
}

function btn_setting(){
    openWindow();
}
function btn_train(){
    openWindow();
}
function btn_map(){
    openWindow();
}
function btn_ticket(){
    openWindow();
}
function btn_more(){
    openWindow();
}

function addMessage(imageSrc, text) {
    const chatbox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Profile Image';

    const textParagraph = document.createElement('p');
    textParagraph.innerText = text;

    messageDiv.appendChild(img);
    messageDiv.appendChild(textParagraph);
    chatbox.appendChild(messageDiv);

    chatbox.scrollTop = chatbox.scrollHeight;
}

function example_case1(){
    setTimeout(() => {
        openChat();
    }, 500);
    
    let messages = [
        { img: 'Image/T-bot_profile.png', text: '열차가 10분 지연되었어요.' },
        { img: 'Image/T-bot_profile.png', text: `행신역 ⇔ 서울역 간 안전을 위한 
        선로 보수로 열차가 서행 중이에요. 열차 출발 시각이 13시 30분으로 지연되었어요.` }
    ];
    
    messages.forEach((message, index) => {
        setTimeout(() => {
            addMessage(message.img, message.text);
        }, 1500 * (index + 1));
    });
}

function example_case2(){
    map_makeLine(
        37.61221888449836, 126.83426767432115,
        37.553037716208834, 126.97266951407535
    )
    map_makeImageMarker(37.59256540921204, 126.88031073290747)
}
