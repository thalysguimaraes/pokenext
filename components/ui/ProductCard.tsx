import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/types";
import { Button } from "./button";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  return (
      <Link href="/" className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg">
        <Card className="rounded-lg border-2">
          <CardContent className="pt-6">
            <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
              <Badge className="absolute top-3 left-3">{data.id}</Badge>
              <Image
                src={data.images?.[0]}
                alt=""
                fill
                className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div>
              <p className="font-semibold text-lg">{data.name}</p>
              <p className="text-sm text-primary/80">{data.category}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Button className="text-sm font-semibold">Details</Button>
            </div>
          </CardFooter>
        </Card>
      </Link>
  );
};

export default ProductCard;