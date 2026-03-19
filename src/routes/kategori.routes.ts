import { Hono } from "hono";

const kategoriRoutes = new Hono();

kategoriRoutes.get('/', async (c) => {
    // get all kategori
})

kategoriRoutes.get('/', async (c) => {
    // get kategori by id
    const id = c.req.param('id');
})

kategoriRoutes.post('/', async (c) => {
    // create kategori
    const body = await c.req.json();
})

kategoriRoutes.patch('/:id', async (c) => {
    // update kategori
})

kategoriRoutes.delete('/:id', async (c) => {
    // delete kategori
})



export default kategoriRoutes;