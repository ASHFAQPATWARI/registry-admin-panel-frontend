const translations = {
  login: {
    loginToAccount: "Login to Your Account",
    orLoginWith: "Or login with",
    login: "Login",
    confirmationCode: "Verification code",
    emailSentTo:
      "Enter the verification code we sent to <Important>{{email}}</Important>",
    didNotGetCode: "Didn’t receive the code?",
    resend: "Resend",
    loginSuccessfull: "Logged in successfully",
    resendCodeSuccessfull: "Verification code sent successfully",
    loginAgreement:
      "By signing up, you agree to our <a>Terms</a>, <1>Data Policy</1> and <2>Cookies Policy</2>.",
    enterValidEmail: "Enter valid email",
    enterEmail: "Enter email",
    password: "Password",
    enterPassword: "Password is required",
  },
  stores: {
    store: "Store",
    stores: "Stores",
    createStore: "Create Store",
    addStoreAdmin: "Add Store Admin",
    createAdmin: "Create Admin - {{name}}",
    adminCreatedSuccessfully: "Admin created successfully",
    editStore: "Edit Store",
    name: "Name",
    contact: "Contact",
    email: "Email",
    description: "Description",
    location: "Location",
    locationEn: "Location EN",
    locationAr: "Location AR",
    storeCreated: "Store {{name}} created succesfully",
    storeEdited: "Store {{name}} edited succesfully",
    nameEn: "Name EN",
    nameAr: "Name AR",
    descriptionEn: "Description EN",
    descriptionAr: "Description AR",
    uploadStoreLogo: "Upload Store Logo",
    storeInfo: "Your store information",
    markActive: "Are you sure to mark the store as active?",
    markInActuve: "Are you sure to mark the store as inactive?",
    markedActive: "{{storename}} is marked as active",
    markedInActive: "{{storename}} is marked as inactive",
  },
  common: {
    login: "Log in",
    home: "Home",
    dashboard: "Dashboard",
    logout: "Log out",
    back: "Back",
    cancel: "Cancel",
    skip: "Skip",
    submit: "Submit",
    email: "Email",
    next: "Next",
    buySeries: "See more",
    required: "Required",
    nameEn: "Name EN",
    nameAr: "Name AR",
    descriptionEn: "Description EN",
    descriptionAr: "Description AR",
    description: "Description",
    firstName: "First Name",
    lastName: "Last Name",
    update: "Update",
    upload: "Upload",
    imageUploaded: "Image uploaded successfully",
    imageDeleted: "Image deleted successfully",
    active: "Active",
    inactive: "Inactive",
    pending: "Pending",
    rejected: "Rejected",
    approved: "Approved",
    status: "Status",
    confirm: "Confirm",
    showTotal: "{{start}} - {{end}} of Total {{total}} items",
    searchByName: "Search by Name",
    published: "Published",
    draft: "Draft",
    submitted: "Submitted",
  },
  products: {
    products: "Products",
    list: "List",
    category: "Category",
    categories: "Categories",
    createCategory: "Create Category",
    price: "Price",
    qty: "QTY",
    createProduct: "Create Product",
    totalProducts: "Total Products",
    categoryCreated: "Category {{name}} created successfully",
    categoryEdited: "Category {{name}} created successfully",
    productCreated: "Product created successfully",
    productEdited: "Product edited successfully",
    productUpdated: "Product updated successfully",
    selectStore: "Select Store",
    selectCategory: "Select Category",
    selectParentCategory: "Select Parent Category",
    uploadProductImages: "Upload Product Images",
    productStatusChange: "Product {{status}} successfully",
    confirmProductStatusUpdate:
      "Are you sure to mark the product as {{status}}?",
  },
  guides: {
    guides: "Guides",
    list: "List",
    category: "Category",
    categories: "Categories",
    authors: "Authors",
    totalGuides: "Total Guides",
    createAuthor: "Create Author",
    authorEdited: "Author edited successfully",
    authorCreated: "Author created successfully",
    guideEdited: "Guide edited successfully",
    guideCreated: "Guide created successfully",
    uploadAuthorImage: "Upload Author Images",
    createCategory: "Create Category",
    selectParentCategory: "Select Parent Category",
    selectCategory: "Select Category",
    categoryCreated: "Category {{name}} created successfully",
    categoryEdited: "Category {{name}} created successfully",
    createGuide: "Create Guide",
    author: "Author",
    confirmGuideStatusUpdate: "Are you sure to mark the guide as {{status}}?",
    selectAuthor: "Select Author",
    uploadGuideLogo: "Upload Guide Image",
    contentEn: "Content in English",
    contentAr: "Content in Arabic",
  },
} as const;

export default translations;
