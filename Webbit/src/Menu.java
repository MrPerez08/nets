import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import javax.swing.*;

public final class Menu extends JPanel {
    private final Dimension dim;
    private static Menu instance;
    private static Canvas canvas;
    private Menu(Dimension dim, Canvas canvas) {
        this.dim = dim;
        this.canvas = canvas;
        setLayout(new FlowLayout());
        setBackground(Color.LIGHT_GRAY);
        setPreferredSize(dim);
        setBorder(BorderFactory.createLineBorder(Color.BLACK));

        //Implement buttons here
        add(addElement.instance(),BorderLayout.NORTH);
    }
    public int width(){return dim.width;}
    public int height(){return dim.height;}
    public static Menu menu(Dimension dim,Canvas canvas) {
        if (instance == null) {instance = new Menu(dim,canvas);}
        return instance;
    }
    //Implements ability to create an element to the Canvas
    public static final class addElement extends JButton{
        static addElement instance;
        private addElement(){
            setText("+");
            setFont(new Font("Serif", Font.BOLD, 60));
            setFocusable(false);
            setForeground(Color.DARK_GRAY);
            setBackground(Color.LIGHT_GRAY);
            setBorderPainted(false);
            setFocusPainted(false);
            setContentAreaFilled(false);
            setDoubleBuffered(true);

            addMouseListener(new MouseAdapter() {
                @Override
                public void mousePressed(MouseEvent e) {
                    setForeground(Color.WHITE);
                }
                @Override
                public void mouseReleased(MouseEvent e) {
                    setForeground(Color.DARK_GRAY);
                }
            });
            addActionListener(new ActionListener() {
                public void actionPerformed(ActionEvent e){
                    canvas.addElement();
                }
            });
        }
        public static addElement instance(){
            if (instance == null) {instance = new addElement();}
            return instance;
        }
    }
}
