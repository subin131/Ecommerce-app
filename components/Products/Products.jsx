import React from  "React";
import {Grid} from '@material-ui/core';
import Product from '../Product/Product';

const products=[
    {id:1,name:'Cheese',description:"Fresh cheese from Illam",Price:'Rs 1000 per kg',image:'./components/Products/image/cheese.jgp'},
    {id:2,name:'Butter',description:"Fresh Butter from heavy fat",Price:'Rs800 per kg',image:'./components/Products/image/butter.jgp'}
]

const Products=()=>{
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
}
export default Products;