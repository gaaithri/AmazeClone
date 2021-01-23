Add /less quantity
1) product display page 
  a) first check for item id in the cart 
  Read using useStateValue the cart items for prop id.
  b) found 

       Y ->Dispatch->  alter the qty update_Cart_Item
       N -> Dispatch ->add_Cart_Item
2) From CartItem page . 
     on change -> update _Cart_Item

3) Delete : onClick : 
 Dispatch REMOVE_CART_ITEM
filter ( or splice can be used/.)

4) the add to cart functionality  with qty parameter warrants a  change in the getCartTotal function implementation . 
now forEach -> amount + item.price*item.qty  should be implemented.