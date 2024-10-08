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
    map_makeImageMarker('Image/Start.png', 40, 54, 20, 54, 37.553037716208834, 126.97266951407535);
    map_customOverLay('13:20 도착 예정', 37.55, 126.97266951407535);
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

function map_customOverLay(text, x, y){
    var content = '<div class ="label"><span class="left"></span><span class="center"><b>' + text + '</b></span><span class="right"></span></div>';

    // 커스텀 오버레이가 표시될 위치입니다 
    var position = new kakao.maps.LatLng(x, y);  

    // 커스텀 오버레이를 생성합니다
    var customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content   
    });

    // 커스텀 오버레이를 지도에 표시합니다
    customOverlay.setMap(map);
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



function addMessage_bot(text) {
    const chatbox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message_bot';

    const img = document.createElement('img');
    img.src = 'Image/T-bot_profile.png';
    img.alt = 'Profile Image';

    const textParagraph = document.createElement('p');
    textParagraph.innerText = text;

    messageDiv.appendChild(img);
    messageDiv.appendChild(textParagraph);
    chatbox.appendChild(messageDiv);

    chatbox.scrollTop = chatbox.scrollHeight;
} addMessage_bot('안녕하세요 T-Guider 입니다. \n궁금한게 있으시면 언제든지 물어보세요.')

function addMessage_user(text) {
    const chatbox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message_user';

    const textParagraph = document.createElement('p');
    textParagraph.innerText = text;

    messageDiv.appendChild(textParagraph);
    chatbox.appendChild(messageDiv);

    chatbox.scrollTop = chatbox.scrollHeight;
}

function example_case1(){
    map_makeImageMarker('Image/Workmark.png', 60, 90, 20, 85, 37.58124795898554, 126.90667902766954);
    map_MovePosition(37.58124795898554, 126.90667902766954);
    map_customOverLay('<p style="color:red">+00:05 지연</p>', 37.544, 126.969);

    setTimeout(() => {
        map_MovePosition(37.55, 126.97266951407535);
    }, 2000);

    setTimeout(() => {
        openChat();
    }, 4000);
    
    let messages = [
        { text: '열차가 10분 지연되었어요.' },
        { text: `행신역 ⇔ 서울역 간 안전을 위한 
        선로 보수로 열차가 서행 중이에요. 열차 출발 시각이 13시 30분으로 지연되었어요.` }
    ];
    setTimeout(() => {
        messages.forEach((message, index) => {
            setTimeout(() => {
                addMessage_bot(message.text);
            }, 1500 * (index + 1));
        });
    }, 4000);
}

function example_case2(){
    openChat();
    
    var delay = 0;
    delay += 1500;
    setTimeout(() => {
        addMessage_user('출발역까지 얼마나걸려 ?')
    }, delay);
    
    delay += 1500;
    setTimeout(() => {
        addMessage_bot('현재 위치에서 서울역까지 대중교통으로 58분 소요돼요.')
    }, delay);
    delay += 2000;
    setTimeout(() => {
        addMessage_bot('13시 20분 열차를 탑승하기 위해 최소 12시 00분에 출발하는 것이 좋아요.')
    }, delay);
}
