import { useState } from 'react';
import './App.css';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          color: '#00e676', // Accent green
          fontWeight: 'bold',
          textShadow: '1px 1px 2px #000'
        }}
      >
        Email Reply Generator
      </Typography>

      <Box
        sx={{
          mx: 3,
          p: 4,
          backgroundColor: '#121212',
          borderRadius: 3,
          boxShadow: '0 0 15px rgba(0, 230, 118, 0.2)'
        }}
      >
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Original Email Content"
          value={emailContent || ''}
          onChange={(e) => setEmailContent(e.target.value)}
          InputLabelProps={{ style: { color: '#ffffff' } }}
          InputProps={{ style: { color: '#ffffff' } }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#00e676' },
              '&:hover fieldset': { borderColor: '#00e676' },
              '&.Mui-focused fieldset': { borderColor: '#00e676' }
            }
          }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel sx={{ color: '#ffffff' }}>Tone (Optional)</InputLabel>
          <Select
            value={tone || ''}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
            sx={{
              color: '#ffffff',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: '#00e676'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#00e676'
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#00e676'
              }
            }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!emailContent || loading}
          fullWidth
          sx={{
            bgcolor: '#00e676',
            color: '#000',
            fontWeight: 'bold',
            ':hover': {
              bgcolor: '#00c853'
            }
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Generate Reply'}
        </Button>
      </Box>

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {generatedReply && (
        <Box sx={{ mt: 4, mx: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#00e676' }}>
            Generated Reply:
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            value={generatedReply || ''}
            inputProps={{ readOnly: true }}
            InputProps={{ style: { color: '#ffffff' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#00e676' },
                '&:hover fieldset': { borderColor: '#00e676' },
                '&.Mui-focused fieldset': { borderColor: '#00e676' }
              }
            }}
          />

          <Button
            variant="outlined"
            sx={{
              mt: 2,
              color: '#00e676',
              borderColor: '#00e676',
              fontWeight: 'bold',
              ':hover': {
                backgroundColor: 'rgba(0, 230, 118, 0.1)',
                borderColor: '#00c853'
              }
            }}
            onClick={() => navigator.clipboard.writeText(generatedReply)}
          >
            Copy to Clipboard
          </Button>
        </Box>
      )}
    </Container>
  );
}

export default App;
