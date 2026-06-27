export const transitionKnowledgeGraph = {
  title: 'THỜI KÌ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI',
  subtitle: 'CÂY CẦU LỊCH SỬ TỪ XÃ HỘI CŨ ĐẾN XÃ HỘI MỚI',

  center: {
    id: 'transition-period',
    label: 'THỜI KỲ QUÁ ĐỘ',
    subtitle: 'thời kỳ cải biến cách mạng',
    description:
      'Cây cầu lịch sử chuyển từ xã hội cũ sang xã hội mới: cải tạo cái cũ, xây dựng cái mới và phát triển xã hội.',
    type: 'center',
  },

  mainFlow: {
    from: {
      id: 'old-society',
      label: 'XÃ HỘI CŨ',
      subtitle: 'CNTB / tiền CNTB',
      description: 'Còn nhiều hạn chế về kinh tế, chính trị, văn hóa, xã hội.',
      type: 'state',
    },
    to: {
      id: 'new-society',
      label: 'XÃ HỘI MỚI',
      subtitle: 'CHỦ NGHĨA XÃ HỘI',
      description:
        'Hướng tới kinh tế phát triển cao, nhân dân làm chủ, văn hóa phát triển và con người phát triển toàn diện.',
      type: 'state',
    },
  },

  groups: [
    {
      id: 'objective-necessity',
      label: 'Tính tất yếu khách quan',
      position: 'top-left',
      color: 'blue',
      quote: 'Xã hội cũ không thể chuyển ngay thành xã hội mới',
      children: [
        { label: 'Kinh tế', children: ['LLSX chưa đủ phát triển'] },
        { label: 'QHSX', children: ['Còn nhiều hình thức sở hữu', 'Chưa thể công hữu ngay'] },
        { label: 'Chính trị', children: ['Còn giai cấp', 'Còn đấu tranh giai cấp'] },
        { label: 'Văn hóa - tư tưởng', children: ['Ý thức cũ', 'Thói quen cũ', 'Lối sống cũ'] },
      ],
    },
    {
      id: 'formation-conditions',
      label: 'Điều kiện hình thành thời kỳ quá độ',
      position: 'top-center',
      color: 'pink',
      children: [
        { label: 'Điều kiện khách quan', children: ['LLSX phát triển', 'Mâu thuẫn LLSX và QHSX TBCN', 'Xu thế lịch sử'] },
        { label: 'Điều kiện chủ quan', children: ['Giai cấp công nhân trưởng thành', 'Đảng Cộng sản lãnh đạo', 'Cách mạng vô sản', 'Nhà nước mới'] },
      ],
    },
    {
      id: 'essence',
      label: 'Bản chất của thời kỳ quá độ',
      position: 'left',
      color: 'orange',
      children: [
        { label: 'Không phải trạng thái ổn định' },
        { label: 'Là thời kỳ cải biến cách mạng' },
        { label: 'Cải tạo cái cũ + xây dựng cái mới + phát triển xã hội' },
      ],
    },
    {
      id: 'destination-socialism',
      label: 'Đích đến - Chủ nghĩa xã hội',
      position: 'bottom-left',
      color: 'red',
      children: [
        { label: 'Kinh tế phát triển cao' },
        { label: 'LLSX hiện đại' },
        { label: 'Công hữu TLSX chủ yếu' },
        { label: 'Nhân dân làm chủ' },
        { label: 'Nhà nước kiểu mới' },
        { label: 'Văn hóa phát triển' },
        { label: 'Con người phát triển toàn diện' },
      ],
    },
    {
      id: 'four-fields',
      label: 'Diễn ra đồng thời trên 4 lĩnh vực',
      position: 'bottom-center',
      color: 'green',
      children: [
        { label: 'Kinh tế', children: ['Kinh tế nhiều thành phần', 'Phát triển LLSX', 'Xây dựng QHSX mới', 'Từng bước công hữu'] },
        { label: 'Chính trị', children: ['Giữ vững chính quyền', 'Xây dựng nhà nước mới', 'Mở rộng dân chủ', 'Hoàn thiện hệ thống chính trị'] },
        { label: 'Văn hóa', children: ['Xóa bỏ tư tưởng cũ', 'Xây dựng văn hóa mới', 'Hình thành con người mới'] },
        { label: 'Xã hội', children: ['Giảm bất bình đẳng', 'Nâng cao đời sống', 'Công bằng xã hội', 'Đoàn kết dân tộc'] },
      ],
    },
    {
      id: 'why-long',
      label: 'Vì sao quá độ lâu dài?',
      position: 'bottom-right',
      color: 'purple',
      children: [
        { label: 'LLSX phải phát triển' },
        { label: 'QHSX phải cải tạo' },
        { label: 'Nhà nước phải hoàn thiện' },
        { label: 'Con người phải thay đổi' },
        { label: 'Văn hóa và ý thức xã hội phải chuyển biến' },
        { label: 'Không thể thực hiện trong thời gian ngắn' },
      ],
    },
    {
      id: 'intermediate-steps',
      label: 'Vì sao nhiều bước trung gian?',
      position: 'right',
      color: 'orange',
      children: [
        { label: '1. Giành chính quyền' },
        { label: '2. Ổn định chính trị' },
        { label: '3. Khôi phục kinh tế' },
        { label: '4. Phát triển LLSX' },
        { label: '5. Hoàn thiện QHSX' },
        { label: '6. Hoàn thiện nhà nước' },
        { label: '7. Xây dựng văn hóa' },
        { label: '8. Nâng cao đời sống nhân dân' },
        { label: '9. Tiến gần CNXH' },
      ],
    },
  ],
} as const;
