import savingAccount from "../models/info";

const createUser = async (req:any, res: any): Promise<any> => {
  try {
    const data: { name: string } = req.body;

    const user = new savingAccount({
      name: data.name,
    });

    await user.save();

    res.sendStatus(200);
  } catch (error) {
    console.error("Error creating user:", error);
    res.sendStatus(500);
  }
};

export default createUser;
