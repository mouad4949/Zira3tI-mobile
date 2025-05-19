export interface Article {
  id: string
  title: string
  description: string
  category: string
  imageUrl: string
}

export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "تقنيات الري الحديثة",
    description: "تعرف على أحدث تقنيات الري التي توفر المياه وتحسن المحصول",
    category: "irrigation",
    imageUrl: "https://avatars.mds.yandex.net/i?id=078dcd584f3c88cbab7513ac3c4cf2ee148d1f9e-12847150-images-thumbs&n=13",
  },
  {
    id: "2",
    title: "مكافحة الآفات بطرق طبيعية",
    description: "طرق فعالة لمكافحة الآفات دون استخدام المبيدات الكيميائية",
    category: "pests",
    imageUrl: "https://eu-images.contentstack.com/v3/assets/blt09e5e63517a16184/blt37d6d729387cfa7b/64d6bf1ecc1c39e96d8fc502/glyphosate_0.png?disable=upscale&amp;width=1200&amp;height=630&amp;fit=crop",
  },
  {
    id: "3",
    title: "أفضل الأسمدة العضوية",
    description: "دليل شامل لاستخدام الأسمدة العضوية لتحسين خصوبة التربة",
    category: "fertilization",
    imageUrl: "https://i.ytimg.com/vi/OuFnnG7eOaw/hqdefault.jpg",  },
  {
    id: "4",
    title: "مواعيد زراعة المحاصيل الموسمية",
    description: "تقويم زراعي للمحاصيل الأكثر شيوعاً في المغرب",
    category: "seasons",
    imageUrl: "https://avatars.mds.yandex.net/i?id=1ea10794a8d235fce76c51e3f9887dbdb53cac2d-10792867-images-thumbs&n=13",
  },
  {
    id: "5",
    title: "نظام الري بالتنقيط للحدائق المنزلية",
    description: "دليل تركيب وصيانة نظام الري بالتنقيط في حديقتك",
    category: "irrigation",
    imageUrl: "https://avatars.mds.yandex.net/get-mpic/5351166/img_id4513917872558541643.jpeg/orig",
  },
  {
    id: "6",
    title: "كافحة العفن في محاصيل الطماطم",
    description: "كيفية التعرف على أنواع العفن وطرق مكافحتها بشكل فعال",
    category: "pests",
    imageUrl: "https://avatars.mds.yandex.net/i?id=69725330a5b0c137afa281c0ecc7574d6287ca06-11269055-images-thumbs&n=13",
  }
]

