const translations = {
  login: {
    loginToAccount: "تسجيل الدخول إلى حسابك",
    orLoginWith: "أو تسجيل الدخول باستخدام",
    login: "تسجيل الدخول",
    confirmationCode: "رمز التحقق",
    emailSentTo:
      "أدخل رمز التحقق الذي أرسلناه إلى <Important>{{email}}</Important>",
    didNotGetCode: "لم تتلقى الرمز؟",
    resend: "إعادة إرسال",
    loginSuccessfull: "تم تسجيل الدخول بنجاح",
    resendCodeSuccessfull: "تم إرسال رمز التحقق بنجاح",
    loginAgreement:
      "بالتسجيل، فإنك توافق على شروطنا <a>الأحكام والشروط</a>، سياسة الخصوصية وسياسة ملفات تعريف الارتباط.",
    enterValidEmail: "أدخل بريدًا إلكترونيًا صالحًا",
    enterEmail: "أدخل البريد الإلكتروني",
    password: "كلمة المرور",
    enterPassword: "كلمة المرور مطلوبة",
  },
  stores: {
    store: "المتجر",
    stores: "المتاجر",
    createStore: "إنشاء متجر",
    addStoreAdmin: "إضافة مدير متجر",
    createAdmin: "إنشاء مدير - {{name}}",
    adminCreatedSuccessfully: "تم إنشاء المدير بنجاح",
    editStore: "تعديل المتجر",
    name: "الاسم",
    contact: "الاتصال",
    email: "البريد الإلكتروني",
    description: "الوصف",
    location: "الموقع",
    locationEn: "الموقع بالانجليزية",
    locationAr: "الموقع بالعربية",
    storeCreated: "تم إنشاء المتجر {{name}} بنجاح",
    storeEdited: "تم تعديل المتجر {{name}} بنجاح",
    nameEn: "الاسم بالانجليزية",
    nameAr: "الاسم بالعربية",
    descriptionEn: "الوصف بالانجليزية",
    descriptionAr: "الوصف بالعربية",
    uploadStoreLogo: "تحميل شعار المتجر",
    storeInfo: "معلومات المتجر الخاص بك",
  },
  common: {
    login: "تسجيل الدخول",
    home: "الرئيسية",
    dashboard: "لوحة التحكم",
    logout: "تسجيل الخروج",
    back: "الرجوع",
    cancel: "إلغاء",
    skip: "تخطي",
    submit: "إرسال",
    email: "البريد الإلكتروني",
    next: "التالي",
    buySeries: "شاهد المزيد",
    required: "مطلوب",
    nameEn: "الاسم بالانجليزية",
    nameAr: "الاسم بالعربية",
    descriptionEn: "الوصف بالانجليزية",
    descriptionAr: "الوصف بالعربية",
    description: "الوصف",
    firstName: "الاسم الأول",
    lastName: "الاسم الأخير",
    update: "تحديث",
    upload: "تحميل",
    imageUploaded: "تم تحميل الصورة بنجاح",
    imageDeleted: "تم حذف الصورة بنجاح",
    active: " نشط",
    inactive: " غير نشط",
    pending: "معلق",
    rejected: "مرفوض",
    approved: "معتمد",
  },
  products: {
    products: "المنتجات",
    list: "القائمة",
    category: "الفئة",
    categories: "الفئات",
    createCategory: "إنشاء فئة",
    price: "السعر",
    qty: "الكمية",
    createProduct: "إنشاء منتج",
    totalProducts: "إجمالي المنتجات",
    categoryCreated: "تم إنشاء الفئة {{name}} بنجاح",
    categoryEdited: "تم تعديل الفئة {{name}} بنجاح",
    productCreated: "تم إنشاء المنتج بنجاح",
    productEdited: "تم تعديل المنتج بنجاح",
    selectStore: "اختر المتجر",
    selectCategory: "اختر الفئة",
    uploadProductImages: "تحميل صور المنتج",
  },
} as const;

export default translations;
