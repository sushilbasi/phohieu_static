/*
  Phở Hiếu menu data — edit dishes and prices here.

  Each section:  { title, note, items: [ ... ] }
  Each item:     { code, name, vi, price, flags }

    code   dish number shown on the left ("" for none)
    name   English name
    vi     Vietnamese name / description
    price  "18.00"  (or "14.00/18.00" to show a regular price plus a "large" price)
    flags  optional: "s" = spicy, "p" = peanuts, "sp" = both

  After editing, just save and refresh the page. No build step needed.
*/
const MENU = [
  {
    title: "Appetizers",
    note: "",
    items: [
      { code: "A1", name: "Fried Spring Rolls", vi: "Chả giò (2 rolls)", price: "8.00" },
      { code: "A2", name: "Fresh Shrimp Rolls", vi: "Gỏi cuốn tôm (2 rolls)", price: "8.00", flags: "p" },
      { code: "A3", name: "Fresh Grilled Pork Roll", vi: "Gỏi cuốn heo nướng (2 rolls)", price: "8.99" },
      { code: "A4", name: "Fresh Grilled Chicken Roll", vi: "Gỏi cuốn gà nướng (2 rolls)", price: "8.99" },
      { code: "A5", name: "Vegetarian Fresh Rolls", vi: "Gỏi cuốn chay (2 rolls)", price: "8.00", flags: "p" },
      { code: "A6", name: "Calamari", vi: "Mực lăn bột", price: "13.99" },
      { code: "A7", name: "Vietnamese Style Chicken Wings", vi: "Cánh gà chiên nước mắm", price: "13.99" },
      { code: "A8", name: "Bean Curd Shrimp", vi: "Tàu hũ ky tôm", price: "11.00" },
      { code: "A9", name: "Shrimp on Sugar Cane", vi: "Chạo tôm", price: "11.00" },
      { code: "A10", name: "Mango Salad", vi: "Gỏi xoài", price: "13.00" },
      { code: "A11", name: "Fried Tofu", vi: "Tàu hũ chiên", price: "12.00" },
    ],
  },
  {
    title: "Phở",
    note: "Vietnamese noodle soup, served in one large size.",
    items: [
      { code: "S1", name: "House Special Phở (Rare Beef, Flank, Tendon, Beef Balls, and Tripes)", vi: "Phở đặc biệt", price: "18.99" },
      { code: "S2", name: "Rare Beef Phở", vi: "Phở tái", price: "18.00" },
      { code: "S3", name: "Rare Beef & Flank Phở", vi: "Phở tái nạm", price: "18.00" },
      { code: "S4", name: "Rare Beef & Beef Ball Phở", vi: "Phở tái bò viên", price: "18.00" },
      { code: "S5", name: "Beef Ball Phở", vi: "Phở bò viên", price: "18.00" },
      { code: "S6", name: "Flank & Chicken Phở", vi: "Phở nạm gà", price: "18.00" },
      { code: "S7", name: "Chicken Phở", vi: "Phở gà", price: "18.00" },
      { code: "S8", name: "Rare Beef & Chicken Phở", vi: "Phở tái gà", price: "18.00" },
      { code: "S9", name: "Vegetarian Phở", vi: "Phở chay", price: "18.00" },
      { code: "S10", name: "Sweet, Sour & Spicy Seafood Phở", vi: "Phở đồ biển chua cay", price: "20.00", flags: "s" },
      { code: "S11", name: "Seafood Phở", vi: "Phở đồ biển", price: "20.00" },
      { code: "S12", name: "Hue’s Style Beef Noodle Soup", vi: "Bún bò Huế", price: "20.00", flags: "s" },
      { code: "S13", name: "Saté Rare Beef Phở", vi: "Phở bò tái sa tế", price: "20.00", flags: "sp" },
      { code: "S14", name: "Wonton Soup", vi: "Súp hoành thánh", price: "12.00" },
      { code: "S15", name: "Plain Noodle Soup", vi: "Phở không", price: "12.00" },
      { code: "S16", name: "BBQ Meat Noodle Soup", vi: "Phở thịt nướng", price: "22.00" },
    ],
  },
  {
    title: "Rice dishes",
    note: "All rice dishes are served with steamed white rice.",
    items: [
      { code: "R1", name: "Lemongrass Grilled Pork Chop", vi: "Cơm sườn nướng", price: "17.50" },
      { code: "R2", name: "Lemongrass Grilled Chicken", vi: "Cơm gà nướng", price: "18.50" },
      { code: "R3", name: "Lemongrass Grilled Pork Chop & Chicken", vi: "Cơm sườn nướng gà nướng", price: "18.50" },
      { code: "R4", name: "Lemongrass Grilled Pork Chop, Chicken & Fried Egg", vi: "Cơm sườn nướng gà nướng ốp la", price: "20.00" },
      { code: "R5", name: "Lemongrass Grilled Pork Chop, Egg Cake & Bean Curd Shrimp", vi: "Cơm sườn chả trứng tàu hũ ky", price: "20.00" },
      { code: "R6", name: "Lemongrass Grilled Pork Chop, Chicken Leg and Fried Egg on Rice", vi: "Cơm sườn nướng đùi gà ốp la", price: "20.00" },
      { code: "R7", name: "Beef Short Ribs on Rice", vi: "Cơm sườn bò", price: "21.00" },
      { code: "R8", name: "Lemongrass Grilled Chicken, Pork Chop and Bean Curd Shrimp", vi: "Cơm gà nướng sườn nướng tàu hũ ky", price: "22.99" },
      { code: "R9", name: "Chicken Curry with Rice", vi: "Cà ri gà với cơm", price: "16.50", flags: "s" },
      { code: "R10", name: "Chicken Curry with Bread", vi: "Cà ri gà với bánh mì", price: "16.50", flags: "s" },
    ],
  },
  {
    title: "Vermicelli bowls",
    note: "Bún: vermicelli noodle bowls with herbs, pickles and peanuts.",
    items: [
      { code: "V1", name: "Vermicelli with Fried Spring Rolls", vi: "Bún chả giò", price: "14.00", flags: "p" },
      { code: "V2", name: "Vermicelli with Grilled Pork & Spring Rolls", vi: "Bún chả giò thịt nướng", price: "17.00", flags: "p" },
      { code: "V3", name: "Vermicelli with Grilled Chicken & Spring Rolls", vi: "Bún chả giò gà nướng", price: "18.50", flags: "p" },
      { code: "V4", name: "Vermicelli with Grilled Chicken & Pork", vi: "Bún thịt nướng gà nướng", price: "18.50", flags: "p" },
      { code: "V5", name: "Vermicelli with Grilled Pork, Chicken & Spring Rolls", vi: "Bún chả giò thịt nướng gà nướng", price: "20.00", flags: "p" },
      { code: "V6", name: "Vermicelli with Grilled Pork, Shrimp Sugar Cane & Spring Rolls", vi: "Bún chả giò chạo tôm thịt nướng", price: "20.00", flags: "p" },
      { code: "V7", name: "Vermicelli with Grilled Chicken, Shrimp Sugar Cane & Spring Rolls", vi: "Bún chả giò chạo tôm gà nướng", price: "20.00", flags: "p" },
      { code: "V8", name: "Vermicelli with Grilled Pork, Bean Curd Shrimp & Spring Rolls", vi: "Bún chả giò tàu hũ ky tôm thịt nướng", price: "20.00", flags: "p" },
      { code: "V9", name: "Vermicelli with Grilled Chicken, Bean Curd Shrimp & Spring Rolls", vi: "Bún chả giò tàu hũ ky tôm gà nướng", price: "20.00", flags: "p" },
    ],
  },
  {
    title: "Bánh mì",
    note: "Vietnamese sandwiches.",
    items: [
      { code: "", name: "Grilled Pork Bánh Mì", vi: "Bánh mì thịt nướng", price: "9.99" },
      { code: "", name: "Grilled Chicken Bánh Mì", vi: "Bánh mì gà nướng", price: "9.99" },
    ],
  },
  {
    title: "Add-ons",
    note: "",
    items: [
      { code: "", name: "Fried Egg", vi: "Ốp la", price: "3.00" },
      { code: "", name: "Steamed Egg Cake", vi: "Chả trứng", price: "3.00" },
      { code: "", name: "Bread", vi: "Bánh mì", price: "3.00" },
      { code: "", name: "Rice", vi: "Cơm", price: "3.00" },
      { code: "", name: "Vermicelli", vi: "Bún", price: "3.00" },
      { code: "", name: "Noodle", vi: "Phở", price: "3.00" },
      { code: "", name: "BBQ Meat", vi: "Thịt nướng", price: "7.00" },
      { code: "", name: "Phở Topping (Rare Beef, or Flank, or Beef Balls, or Tendon, or Tripes)", vi: "Thịt thêm cho phở", price: "7.00" },
      { code: "", name: "Side Beef Short Ribs", vi: "Sườn bò ăn kèm", price: "12.00" },
    ],
  },
  {
    title: "Beverages",
    note: "",
    items: [
      { code: "D1", name: "Soft Drinks", vi: "Nước ngọt: Coke, Diet Coke, Coke Zero, Pepsi, Ginger Ale, C-Plus, Sprite, Iced Tea", price: "2.50" },
      { code: "D2", name: "Smoothies", vi: "Sinh tố: Avocado, Strawberry, Mango, Soursop, Pineapple", price: "6.50" },
      { code: "D3", name: "Vietnamese Iced Coffee with Condensed Milk", vi: "Cà phê sữa đá", price: "6.50" },
      { code: "D4", name: "Vietnamese Hot Coffee with Condensed Milk", vi: "Cà phê sữa nóng", price: "6.50" },
      { code: "D5", name: "Original Milk Tea with Tapioca", vi: "Trà sữa truyền thống", price: "7.00" },
      { code: "D6", name: "Thai Milk Tea with Tapioca", vi: "Trà sữa Thái", price: "7.00" },
      { code: "", name: "Add tapioca", vi: "Trân châu", price: "1.50" },
      { code: "", name: "Add protein powder", vi: "Bột protein", price: "1.50" },
    ],
  },
];
