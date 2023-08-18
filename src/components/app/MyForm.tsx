const MyForm = () => {
  const onSubmit = async (formData: any) => {
    'use server';
    console.log(formData);
  };

  return (
    <form action={onSubmit}>
      <input type="text" name="task" />
      <input type="number" name="cost" />
      <input type="submit" value="Отправить" />
    </form>
  );
};

export default MyForm;
