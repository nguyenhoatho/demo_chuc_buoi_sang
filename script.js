// Danh sách các ảnh đại diện
const avatarImages = [
    'folder_img/378122343_1788273374956012_8396977520956745408_n.jpg',
    'folder_img/680190979_2521823901600952_3397315760667977670_n.jpg'
];

// Danh sách các câu chúc ngẫu nhiên
const wishes = [
    "Hôm nay là một ngày tuyệt vời, hãy cười và tận hưởng mỗi khoảnh khắc!",
    "Mỗi sáng mới là một cơ hội mới để thay đổi cuộc sống của bạn.",
    "Bạn đáng nhận được sự hạnh phúc nhất trong cuộc sống.",
    "Hôm nay, hãy làm điều gì đó để yêu thương bản thân mình hơn.",
    "Cuộc sống là một phiêu lưu tuyệt vời, hãy sống từng khoảnh khắc.",
    "Bạn có khả năng thực hiện những điều tuyệt vời, hôm nay là ngày bắt đầu!",
    "Mỉm cười là điều rẻ nhất nhưng có giá trị nhất. Hãy mỉm cười ngay bây giờ!",
    "Mỗi ngày là một trang trắng, hãy viết nên một câu chuyện đẹp!",
    "Không có gì không thể nếu bạn đủ can đảm để thử.",
    "Hôm nay, hãy trở thành phiên bản tốt nhất của chính bạn.",
    "Thành công bắt đầu từ một quyết định. Hãy quyết định thành công hôm nay!",
    "Bạn không cần phải hoàn hảo, bạn chỉ cần cố gắng hết sức.",
    "Mỗi sáng thức dậy là một phép màu. Hãy cảm ơn nhân dạo của bạn.",
    "Những giấc mơ lớn bắt đầu từ những bước nhỏ. Bắt đầu hôm nay!",
    "Bạn là ánh sáng của chính mình, hãy tỏa sáng!",
    "Hôm nay là ngày để cảm thấy bình yên và hạnh phúc.",
    "Đừng lo về tương lai, hãy tập trung vào hiện tại.",
    "Bạn xứng đáng được yêu thương và chăm sóc.",
    "Mỗi thử thách là một cơ hội để trở nên mạnh mẽ hơn.",
    "Hôm nay, bạn sẽ làm những điều tuyệt vời!",
    "Nửa đầu tiên của hôm nay là quà tặng, nửa sau là việc của bạn.",
    "Bạn có sức mạnh để thay đổi thế giới. Hãy bắt đầu từ bản thân!",
    "Hạnh phúc là sự lựa chọn. Hãy chọn hạnh phúc hôm nay!",
    "Tình yêu, tấm lòng và nỗ lực là tất cả những gì bạn cần.",
    "Bạn đã vượt qua 100% những ngày xấu trong quá khứ, bạn sẽ vượt qua hôm nay!",
    "Mỗi sáng là một cơ hội để tìm thấy ý nghĩa mới.",
    "Bạn không phải hoàn hảo, nhưng bạn đã cố gắng. Đó là điều tuyệt vời!",
    "Cuộc sống đơn giản nhưng tuyệt vời khi bạn biết trân trọng nó.",
    "Hôm nay, hãy làm cái gì đó chỉ vì bản thân bạn.",
    "Bạn là người hùng của câu chuyện của chính mình!",
    "Mỗi ngày mới là cơ hội để học hỏi, lớn lên và sống tốt hơn.",
    "Hôm nay, bạn sẽ cảm thấy mạnh mẽ, thông minh và tuyệt vời!",
    "Đừng bao giờ quên rằng bạn là đủ, bạn luôn đủ.",
    "Hạnh phúc không phải ở cuối con đường, nó ở trong từng bước của bạn.",
    "Bạn là một phước lành đối với thế giới này.",
    "Mỗi sáng thức dậy là một chiến thắng. Hãy ăn mừng nó!",
    "Cuộc sống quá ngắn để lãng phí vào những điều tiêu cực.",
    "Bạn được sinh ra để tỏa sáng, hôm nay là ngày bạn bắt đầu!",
    "Hôm nay, bạn sẽ chuyển những mơ ước thành hiện thực.",
    "Mỉm cười của bạn có thể làm cho ai đó có một ngày tốt hơn.",
    "Bạn có thể làm được, bạn sẽ làm được. Hãy tin tưởng vào bản thân!",
    "Hôm nay là ngày hoàn hảo để bắt đầu một cuộc sống mới.",
    "Không có gì sai khi muốn hạnh phúc. Hãy thay vì theo đuổi nó!"
];

// Hàm lấy câu chúc ngẫu nhiên
function getNewWish() {
    const randomIndex = Math.floor(Math.random() * wishes.length);
    const wishElement = document.getElementById('randomWish');
    
    // Thêm hiệu ứng fade out
    wishElement.style.animation = 'none';
    setTimeout(() => {
        wishElement.textContent = wishes[randomIndex];
        wishElement.style.animation = 'fadeIn 0.6s ease-out';
    }, 300);
}

// Hàm cập nhật thời gian
function updateTime() {
    const now = new Date();
    
    // Định dạng giờ
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Định dạng ngày
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString('vi-VN', options);
    
    // Cập nhật DOM
    document.getElementById('currentTime').textContent = timeString;
    document.getElementById('currentDate').textContent = dateString;
}

// Hàm thay đổi ảnh đại diện
function changeAvatar() {
    const avatarImg = document.getElementById('avatarImage');
    const randomIndex = Math.floor(Math.random() * avatarImages.length);
    
    avatarImg.style.opacity = '0';
    setTimeout(() => {
        avatarImg.src = avatarImages[randomIndex];
        avatarImg.style.opacity = '1';
    }, 300);
}

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị câu chúc đầu tiên
    getNewWish();
    
    // Cập nhật thời gian ngay lập tức
    updateTime();
    
    // Cập nhật thời gian mỗi giây
    setInterval(updateTime, 1000);
    
    // Hiệu ứng nhấp chuột nút
    const button = document.querySelector('.btn-new-wish');
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        changeAvatar(); // Thay đổi ảnh đại diện
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
    
    // Thay đổi ảnh ngẫu nhiên mỗi 15 giây
    setInterval(changeAvatar, 15000);
});

// Fetch quotes từ API nếu muốn thêm các câu chúc từ internet
// Bỏ comment để sử dụng API
/*
async function getQuoteFromAPI() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.log('Không thể kết nối API, sử dụng câu chúc local');
        return getNewWish();
    }
}
*/
