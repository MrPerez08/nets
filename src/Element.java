import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import javax.swing.*;
import javax.swing.JFrame;
import javax.swing.WindowConstants;

public class Element extends JPanel{
    private int x=0,y=0;
    public Element(){
        setBackground(Color.LIGHT_GRAY);
        setBorder(BorderFactory.createLineBorder(Color.BLACK));
        setSize(new Dimension(x,y));
        setLayout(null);
        setLocation(200,200);
        setBounds(x,y,x+50,y+50);
    }

}