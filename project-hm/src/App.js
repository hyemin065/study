import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
  Button,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import { Menu, ChevronLeft, ChevronRight, MoveToInbox, Mail } from '@material-ui/icons';
import styled from 'styled-components';

const Buttons = styled(Button)`
  text-align: center;
`;

const ButtonArea = styled(Container)`
  text-align: center;

  & > div + div {
    margin-top: 10px;
  }
`;

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const _ = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            혜민스님 포트폴리오
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <>
          <div className={classes.drawerHeader} />
          <Typography paragraph>
            사람들의 언덕 내린 소녀들의 멀듯이, 파란 이름자를 때 헤는 까닭입니다. 까닭이요, 벌써 어머님, 것은 계십니다.
            쓸쓸함과 별이 애기 흙으로 지나가는 지나고 쉬이 사랑과 무덤 봅니다. 피어나듯이 아이들의 이름자 까닭이요,
            마리아 않은 밤이 보고, 북간도에 까닭입니다. 말 헤는 보고, 이런 잠, 이런 이제 까닭입니다. 밤이 별이 별을
            까닭입니다. 내 이름을 속의 별 이제 다하지 벌레는 마디씩 봅니다. 하나에 북간도에 별 하늘에는 차 별 이름과,
            토끼, 봅니다. 이름을 가난한 강아지, 하나 무엇인지 하나에 있습니다. 하나 쉬이 별빛이 우는 지나고 걱정도
            청춘이 아직 까닭입니다. 하나 걱정도 이 벌레는 밤이 라이너 까닭이요, 쓸쓸함과 까닭입니다. 위에도 어머님,
            다하지 흙으로 봅니다. 라이너 하나에 가슴속에 있습니다. 별 말 계집애들의 마디씩 하늘에는 불러 자랑처럼 이런
            거외다. 풀이 패, 아직 어머니, 있습니다. 별 북간도에 프랑시스 까닭이요, 하나 강아지, 별 이름과 계십니다. 때
            프랑시스 아스라히 별 별빛이 어머니 묻힌 까닭입니다. 것은 멀듯이, 피어나듯이 하나에 이런 별이 무덤 청춘이
            봅니다. 어머님, 새워 쉬이 된 보고, 이웃 내 아이들의 있습니다. 사람들의 어머님, 새워 하늘에는 속의 동경과
            하나에 어머니, 멀리 있습니다. 묻힌 별 써 밤을 별 있습니다. 멀듯이, 언덕 무덤 까닭입니다. 쓸쓸함과 까닭이요,
            너무나 어머님, 책상을 위에 계십니다. 까닭이요, 이름과, 어머님, 새워 봅니다. 아름다운 별 프랑시스 불러 내
            있습니다. 아침이 차 때 아이들의 어머님, 가슴속에 한 거외다. 지나가는 무덤 시와 덮어 내린 보고, 멀듯이,
            계십니다. 나의 이 가을로 나는 시인의 된 이웃 아직 밤을 까닭입니다. 봄이 아이들의 나는 까닭이요, 비둘기,
            새겨지는 듯합니다. 다 보고, 별들을 무덤 위에 이국 언덕 이웃 까닭입니다. 오는 패, 하나에 추억과 아직 언덕 경,
            이네들은 있습니다.
          </Typography>
          <Typography paragraph>
            멀리 마디씩 내 옥 무덤 않은 덮어 봅니다. 프랑시스 부끄러운 이름자를 이 가난한 아스라히 슬퍼하는 노새,
            까닭입니다. 이름을 덮어 자랑처럼 헤일 노루, 했던 새워 까닭입니다. 쉬이 내일 아스라히 별이 계십니다. 마리아
            때 다 쓸쓸함과 이름자를 무덤 이름을 했던 듯합니다. 마디씩 시와 속의 밤이 별 별 별들을 아이들의 까닭입니다.
            하나에 다 별들을 까닭입니다. 나는 잠, 걱정도 별이 않은 된 이름자 까닭입니다. 다하지 아름다운 써 못 봅니다.
            말 못 불러 봅니다. 무엇인지 소녀들의 덮어 계절이 이름자 봅니다. 겨울이 내린 별을 많은 별 하나 나는 딴은
            흙으로 봅니다. 사람들의 봄이 어머니, 언덕 속의 피어나듯이 불러 많은 가을로 까닭입니다. 봄이 아직 청춘이 가득
            까닭입니다. 쉬이 계집애들의 이름자 그리고 있습니다. 동경과 나는 나는 벌써 하늘에는 있습니다. 가득 아직 노루,
            불러 내 된 노새, 거외다. 하나에 쉬이 토끼, 이름과, 이름과, 라이너 나는 봅니다. 이네들은 어머님, 이런 동경과
            하나에 내 듯합니다. 우는 속의 둘 거외다. 청춘이 가슴속에 잔디가 까닭입니다. 가난한 별빛이 계절이 이름과,
            그리워 가슴속에 노새, 이런 무덤 거외다. 헤일 지나고 까닭이요, 별 있습니다. 별을 나는 이런 이름과 어머니,
            버리었습니다. 위에 릴케 헤일 언덕 자랑처럼 이런 아침이 어머님, 있습니다. 무덤 별에도 슬퍼하는 헤는 아름다운
            버리었습니다. 이런 않은 못 우는 겨울이 북간도에 이런 하나에 차 계십니다. 하나에 오면 하나에 별 무성할 별 다
            어머니, 거외다. 나는 별을 책상을 피어나듯이 듯합니다.
          </Typography>
          <ButtonArea>
            <Box>
              <Buttons variant="contained" color="primary" onClick={() => alert('버튼 테스트')}>
                Test Button
              </Buttons>
            </Box>
            <Box>
              <Buttons variant="outlined" color="secondary">
                Click
              </Buttons>
            </Box>
            <Box>
              <AlertDialog />
            </Box>
          </ButtonArea>
        </>
      </main>
    </div>
  );
};

export default _;

const AlertDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">당신의 정보 유출 서비스</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">당신의 모든 정보를 가져가도 되겠습니까?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            동의
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            동의함
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
