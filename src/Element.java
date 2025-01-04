import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import javax.swing.*;
import javax.swing.JFrame;
import javax.swing.WindowConstants;

public class Element {
    private JPanel element = new JPanel();
    private int x=0,y=0;
    public Element(){
        element.setBackground(Color.LIGHT_GRAY);
        element.setBorder(BorderFactory.createLineBorder(Color.BLACK));
        //element.setSize(new Dimension(x,y));
        //element.setLayout(null);
        //element.setLocation(200,200);
        element.setBounds(x,y,x+50,y+50);
    }

    public JPanel getElement(){
        return element;
    }
}
