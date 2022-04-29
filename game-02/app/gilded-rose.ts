export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      // # Artículo Brie Añejo
      if (this.items[i].name === "Aged Brie") {
        this.items[i].sellIn -= 1;
        if (this.items[i].quality < 50) {
          this.items[i].quality += 1;
        }
      }

      // # Artículo Backstage passes
      if (this.items[i].name === "Backstage passes") {
        // # artículo vendido en más de 10 días hasta la fecha de caducidad
        if (this.items[i].sellIn > 10) {
          this.items[i].sellIn -= 1;
          if (this.items[i].quality < 50) {
            this.items[i].quality += 1;
          }
        }

        // # item sellIn pasó la fecha de caducidad
        if (this.items[i].sellIn <= 0) {
          this.items[i].sellIn -= 1;
          this.items[i].quality = 0;
        }

        // # artículo vendido en menos de 5 días fecha de caducidad
        if (this.items[i].sellIn <= 5) {
          this.items[i].sellIn -= 1;
          if (this.items[i].quality <= 47) {
            this.items[i].quality += 3;
          }
          if (this.items[i].quality > 47 && this.items[i].quality < 50) {
            this.items[i].quality = 50;
          }
        }

        //# artículo vendidoEn menos de 10 días fecha de caducidad
        if (this.items[i].sellIn <= 10) {
          this.items[i].sellIn -= 1;
          if (this.items[i].quality <= 48) {
            this.items[i].quality += 2;
          }
          if (this.items[i].quality > 48 && this.items[i].quality < 50) {
            this.items[i].quality = 50;
          }
        }
      }

      // # Sulfuras Artículo
      if (this.items[i].name === "Sulfuras") {
        this.items[i].sellIn -= 1;
        this.items[i].quality = 80;
      }

      // # Conjured Artículo
      if (this.items[i].name === "Conjured") {
        this.items[i].sellIn -= 1;
        if (this.items[i].quality >= 2) {
          this.items[i].quality -= 2;
        }
        if (this.items[i].quality === 1) {
          this.items[i].quality = 0;
        }
      }

      //  # Cualquier otro artículo
      else {
        this.items[i].sellIn -= 1;
        if (this.items[i].quality > 0) {
          this.items[i].quality -= 1;
        }
      }
    }

    return this.items;
  }
}
