import { Category } from "./category";
import { responseModel } from "./responseModel";

export interface categoryResponseModel extends responseModel{
    data:Category[];
}
//Öncelikle gelen API'nin resultuna bakarız. Eğer API bir obje de olabilir, array de olabilir. Buna göre modelimizi
//oluştururuz. Oluşturacağımız model gelen API'nin obje olmasından dolayı ve içinde array türünde, boolean türünde
//ve string türde değerler taşıdığından dolayı bunları Entities'lerimiz için tek tek oluştururuz. Ancak her Entity
//için ortak olan kısım boolean ve string türdeki Success ve Message kısmı olduğundan dolayı bununla ilgili ayrı
//bir dosya oluştururuz. 
//Öncelikle Product adında bir typescript dosyası oluşturduk. Bu dosyanın bir interface olduğunu belirttik. Her 
//yerde kullanılmasını sağlayabilmek adına da önüne export koyduk. Export C# dilindeki public ile aynı anlama gelir.
//Daha sonra interface içine propertylerimizin isimlerini ve türlerini yazdık. Örneğin productId:number gibi.
//Ardından productResponse adında bir ts dosyası daha oluşturduk. Bu ts dosyasının içine gelecek olan değerimizin 
//yani datamızın bir Product'tan oluşan array olduğunu yazdık. Daha sonra API'den gelen değerleri tuttuğumuz 
//responseModel adındaki dosyayı extends ederek direkt kullanma imkanına sahip olduk. Bildiğimiz inheritance mantığı
//ts içinde extends olarak kullanılmaktadır. 