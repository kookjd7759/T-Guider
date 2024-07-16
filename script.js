// 지도를 생성합니다.
var mapContainer = document.getElementById('map'),
    mapOption = {
        center: new kakao.maps.LatLng(37.55, 126.9),
        level: 8
    };

// 지도를 생성합니다.
var map = new kakao.maps.Map(mapContainer, mapOption);

function init(){
    map_makeLine(
        37.61221888449836, 126.83426767432115,
        37.553037716208834, 126.97266951407535
    );
    map_makeImageMarker('Image/train_R.png', 100, 30, 50, 15, 37.59925667145015, 126.86491641375935);
} init();


function map_MovePosition(x, y) {
    var moveLatLon = new kakao.maps.LatLng(x, y);
    map.panTo(moveLatLon);
}

function map_makeImageMarker(url, size_x, size_y, point_x, point_y, pos_x, pos_y){
    var imageSrc = url,
        imageSize = new kakao.maps.Size(size_x, size_y),
        imageOption = {offset: new kakao.maps.Point(point_x, point_y)};

    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(pos_x, pos_y);

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
        strokeStyle: 'dashed'
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
    map_makeImageMarker('Image/Workmark.png', 60, 90, 20, 85, 37.58124795898554, 126.90667902766954);
    map_MovePosition(37.58124795898554, 126.90667902766954);

    setTimeout(() => {
        openChat();
    }, 2000);
    
    let messages = [
        { img: 'Image/T-bot_profile.png', text: '열차가 10분 지연되었어요.' },
        { img: 'Image/T-bot_profile.png', text: `행신역 ⇔ 서울역 간 안전을 위한 
        선로 보수로 열차가 서행 중이에요. 열차 출발 시각이 13시 30분으로 지연되었어요.` }
    ];
    setTimeout(() => {
        messages.forEach((message, index) => {
            setTimeout(() => {
                addMessage(message.img, message.text);
            }, 1500 * (index + 1));
        });
    }, 2000);
    
}

function example_case2(){

}
