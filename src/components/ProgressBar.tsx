import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';
import * as Progress from 'react-native-progress';

interface Props {
  progress?: number;
}

const ProgressBar = (props: Props) => {
  const [progress, setProgress] = useState(props.progress);
  useEffect(() => {
    setProgress(props.progress);
  });

  return (
    <Progress.Bar
      color={progress && progress < 1 ? colors.gray : colors.green}
      style={styles.bar}
      width={300}
      progress={progress}
      animated
    />
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  bar: {
    alignSelf: 'center',
  },
});
