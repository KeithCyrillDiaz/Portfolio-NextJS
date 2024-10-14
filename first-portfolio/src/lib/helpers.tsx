import { TechnicalSkillTypes } from "./Constants/About";
import { imageType } from "./Constants/Projects";



export const isFirstHalf = (index: number, arrayLength: number): boolean => {
    return index < (Math.floor(arrayLength / 2));

}

export const getSecondHalfItems = (index: number, items: TechnicalSkillTypes[] ) => {
    const secondHalfIndex = index + Math.floor(items.length / 2);
    return items[secondHalfIndex];
}

export const validateYear = (year: number) => {
    return year > 2023;
}
const getImageDimensions = (imageUrl: string): Promise<{ width: number, height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
  
      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight
        });
      };
  
      img.onerror = (error) => {
        reject(new Error("Failed to load image"));
      };
  
      img.src = imageUrl;
    });
  }
  
  export const isImagePortrait = async (imageUrl: string): Promise<boolean> => {
    try {
        const {width, height} = await getImageDimensions(imageUrl)
        return height > width
    } catch (error) {
        console.log("error: ", error)
        return false
    }
  }

  export const separatePortraitAndLandscapeImages = async (images: imageType[]) => {
    try {

        console.log(images)
        let portraitUrls: string[] = [];
        let landscapeUrls: string[] = [];

        for(const imageData of images){
            const {imagesURL} = imageData
            for (const url of imagesURL){
                const result = await isImagePortrait(url)
                if(result){
                    portraitUrls.push(url)
                }
                else landscapeUrls.push(url)
            }
        }

        console.log("portrait: ", portraitUrls)
        console.log("landscapeUrls: ", landscapeUrls)

        //unfinished, not yet needed

    } catch (error) {
        console.log("", error)
        return 
    }
  }