//BSCS 3-1
//BALDOMAR,NEIL JUSTINE
//CREENCIA,MARK KERVY
//GUAVES,RESHLY

import  React, {useState} from 'react';
import { View, Text, ScrollView, Image, Modal, Button, StyleSheet } from 'react-native';

const SampleModal = props =>{
  return (
    <Modal visible={props.visible} animationType='slide'>
  <View style={styles.container}>
  <ScrollView>
    <Image style={styles.image} source={('https://www.bing.com/images/blob?bcid=S.9fc0eWUY8CXA')}/>
    <Text style={styles.text1}>
        {"\n"}
     Computer Programmer
        {"\n"}
    </Text>    
    <Text style={styles.text}>

    A computer programmer, sometimes called a software developer, a programmer or more recently a coder (especially in more informal contexts), is a person who creates computer software. The term computer programmer can refer to a specialist in one area of computers, or to a generalist who writes code for many kinds of software. 
    {"\n"}
    </Text>
    <Text style={styles.text}>
     A programmer's most often-used computer language (e.g., Assembly, COBOL, C, C++, C#, JavaScript, Lisp, Python, Java) may be prefixed to the term programmer. Some who work with web programming languages also prefix their titles with web. 
{"\n"}
</Text>
<Text style={styles.text}>
A computer programmer is a skilled professional who codes, tests, debugs, and maintains the comprehensive instructions known as computer programs that devices should follow to execute their functions. Computer programmers also conceptualize, design, and test logical structures to solve computer issues.
{"\n"}
</Text>
<Text style={styles.text}>
Computer Programmer Skills & Competencies
Aside from knowledge of computer languages and familiarity with relevant commercial products, there are several soft skills computer programmers should have to be successful.

Analytical thinking: Computer programmers need to understand, manipulate, and repair complex computer code. This sometimes entails trying to isolate a problem that could be buried somewhere in thousands of lines of code, so they need to be able to think through the problem and narrow down where to look.
Attention to detail: Computer programmers need to pay attention to every line of code written. One wrong command and the entire program could malfunction.
Collaboration: Computer programmers may need help from another department or colleague to fix a software issue. It is important they have a collaborative mindset. The work programmers do often involves writing software to streamline work or solve a workflow problem, and they must collaborate with those who will be using the software.
Focus: Writing computer programs involves long hours spent writing code or troubleshooting problems. To be successful, programmers need to be able to keep their full attention on the work they are doing.
{"\n"}
</Text>
<Text style={styles.text}>
While some collaboration is necessary, computer programmers can spend hours at a computer poring over lines of computer code. It can be tedious work.

Some programmers work from home because the work can be done alone, but this is not always the case. Other programmers work in their employers' offices, especially when they are involved in larger projects with other programmers.
</Text>
<Button title="Close!" onPress={props.onClose}/>
  </ScrollView>
  </View>
  </Modal>
);
}
export default SampleModal;
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'violet'
  },
  text:{
    textAlign: 'justify',
    textIndent: 50,
    padding: 10
  },
  text1:{
    textAlign: "center",
    fontSize: 30
  },
  image: {
    width: '100%',
    height: 200
    
  }
}
)