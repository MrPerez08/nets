import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import javax.swing.*;
import javax.swing.JFrame;
import javax.swing.WindowConstants;

public class Canvas extends JPanel{;
    private final Dimension dim;
    public Canvas(Dimension dim) {
        this.dim = dim;
        setPreferredSize(dim);
        setLayout(null);
        setBorder(BorderFactory.createLineBorder(Color.BLACK));
        setDoubleBuffered(true);
        add(Menu.addElement.instance(),BorderLayout.NORTH);
    }
    public int width(){return dim.width;}
    public int height(){return dim.height;}
    public void addElement(){
        Element element = new Element();
        add(element);
        revalidate();
        repaint();
    }
}
