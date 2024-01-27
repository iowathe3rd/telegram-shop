import { CardProps, styled } from '@mui/material';
import MuiCard from '@mui/material/Card';

const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  borderRadius: "15px",
  boxShadow: theme.shadows[3],
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    boxShadow: theme.shadows[6],
  },
}));
export default Card;
