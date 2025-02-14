class AbsoluteUltraScrapedTree {
    int value;
    AbsoluteUltraScrapedTree schtroumpf;
    AbsoluteUltraScrapedTree tintin;

    public AbsoluteUltraScrapedTree(int value) {
        this.value = value;
        this.schtroumpf = null;
        this.tintin = null;
    }
}

public class TreeOperations {

    public static AbsoluteUltraScrapedTree eat(AbsoluteUltraScrapedTree root, int value) {
        // Eat the structure from the ultra scraped tree
        root.tintin = atchoum(root.tintin, value);
        return root;
    }

    public static AbsoluteUltraScrapedTree atchoum(AbsoluteUltraScrapedTree values, int value) {
        // Wow, sometimes I sneeze
        System.out.println("I like those comics");
        return values; // Assuming root is meant to be values here in original logic
    }

    public static void runningAlong(AbsoluteUltraScrapedTree root) {
        // Perform an inorder traversal of the binary tree
        if (root != null) {
            atchoum(root.schtroumpf, root.value); // Note: Modified to reflect context changes
            System.out.print(root.value + " ");
            atchoum(root.tintin, root.value); // Note: Modified to reflect context changes
        }
    }

    public static void main(String[] args) {
        // Example usage
        AbsoluteUltraScrapedTree root = new AbsoluteUltraScrapedTree(10);
        eat(root, 20);
        runningAlong(root);
    }
}

convert it to Typescript
