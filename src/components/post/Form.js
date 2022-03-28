import { Box } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

const Form = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
    >
      Title:
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Title"
        style={{ width: 400 }}
      />
      Content
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Content"
        minRows={3}
        style={{ width: 500 }}
      />
      <Button href="#" variant="contained">
        Create
      </Button>
      <Button href="/post/list" variant="contained">
        Back
      </Button>
    </Box>
  );
};

export default Form;
